export class MainController {
  constructor ($scope) {
    'ngInject';

    $scope.valorMostrado = '';
    $scope.historico = '';
		$scope.valor = '';
    $scope.memoria = '';
		$scope.operacao = '';
    $scope.resultado = '';

    $scope.salvarMemoria = function() {
				$scope.memoria = parseFloat($scope.valorMostrado);
		};

    $scope.salvarValor = function(valor) {
      $scope.historico += valor;
      if($scope.valorMostrado === 0 || $scope.valorMostrado === '0'){
        $scope.valorMostrado = '';
      }
      $scope.valorMostrado += valor.toString();
      $scope.valor = parseFloat($scope.valorMostrado);

		};

    $scope.somar = function() {
      if($scope.valorMostrado !== ''){
        if($scope.operacao !== ''){
          $scope.calcularTrocaOperacao();
        }
        $scope.salvarMemoria();
        $scope.operacao = '+';
        $scope.limparValorMostrado();
        $scope.historico += ' + ';
      }
		};

		$scope.subtrair = function() {
      if($scope.valorMostrado !== ''){
        if($scope.operacao !== ''){
          $scope.calcularTrocaOperacao();
        }
        $scope.salvarMemoria();
        $scope.operacao = '-';
        $scope.limparValorMostrado();
        $scope.historico += ' - ';
      }
		};

		$scope.multiplicar = function() {
      if($scope.valorMostrado !== ''){
        if($scope.operacao !== ''){
          $scope.calcularTrocaOperacao();
        }
        $scope.salvarMemoria();
        $scope.operacao = '*';
        $scope.limparValorMostrado();
        $scope.historico += ' * ';
      }
		};

		$scope.dividir = function() {
      if($scope.valorMostrado !== ''){
        if($scope.operacao !== ''){
          $scope.calcularTrocaOperacao();
        }
        $scope.salvarMemoria();
        $scope.operacao = '/';
        $scope.limparValorMostrado();
        $scope.historico += ' / ';
      }
		};

    $scope.calcularTotal = function() {
      $scope.resultado = $scope.getExpressao();
      $scope.memoria = $scope.resultado;      
      $scope.valorMostrado = $scope.resultado;
      $scope.historico = $scope.resultado;
		};

    $scope.calcularTrocaOperacao = function() {
      $scope.resultado = $scope.getExpressao();     
      $scope.valorMostrado = $scope.resultado;
      $scope.historico = $scope.resultado;
      $scope.valor = 0;
      $scope.memoria = 0;
      $scope.operacao = '';
		};

    $scope.limparValores = function() {
      $scope.limparValorMostrado();
			$scope.historico = '';
      $scope.operacao = '';
			$scope.memoria = '';
      $scope.valor = '';
      $scope.resultado = '';
		};

    $scope.limparValorMostrado = function() {
    	$scope.valorMostrado = '';
    }

    $scope.getExpressao = function() {
      return eval(' ( ' + $scope.memoria.toString() + ' ) ' + $scope.operacao.toString() + ' ( ' +$scope.valor.toString() + ' ) ');
    }

  }



}
