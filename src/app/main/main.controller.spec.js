describe('controllers', () => {
  let vm;

  beforeEach(angular.mock.module('calculadora'));

  beforeEach(inject(($controller, webDevTec, toastr) => {
    spyOn(webDevTec, 'getTec').and.returnValue([{}, {}, {}, {}, {}]);
    spyOn(toastr, 'info').and.callThrough();

    vm = $controller('MainController');
  }));

  it('deve somar corretamente', function() {
    vm.salvarValor(2);

    vm.somar();

    vm.salvarValor(2);

    expect(vm.valor).equals(4);
  });

  it('deve subtrair corretamente', function() {
    vm.salvarValor(2);

    vm.subtrair();

    vm.salvarValor(1);

    expect(vm.valor).equals(1);
  });

  it('deve multiplicar corretamente', function() {
    vm.salvarValor(3);

    vm.multiplicar();

    vm.salvarValor(2);

    expect(vm.valor).equals(6);
  });

  it('deve dividir corretamente', function() {
    vm.salvarValor(10);

    vm.dividir();

    vm.salvarValor(2);

    expect(vm.valor).equals(5);
  });
});
