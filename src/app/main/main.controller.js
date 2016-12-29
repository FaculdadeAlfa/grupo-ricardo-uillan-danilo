export class MainController {
  constructor ($scope) {
    'ngInject';

    $scope.valorMostrado = "";
		$scope.valor = null;
    $scope.memoria = null;
		$scope.operacao = null;

    $scope.salvarMemoria = function() {
			if ($scope.memoria == null) {
				$scope.memoria = parseFloat($scope.valor);
			}
		};

    $scope.salvarValor = function(valor) {
			$scope.valor = parseFloat(valor);
      $scope.valorMostrado = valor;
		};

    $scope.somar = function() {
			$scope.salvarMemoria();
			$scope.operacao = "+";
			$scope.valorMostrado = 0;
		};

		$scope.subtrair = function() {
			$scope.salvarMemoria();
			$scope.operacao = "-";
			$scope.valorMostrado = 0;
		};

		$scope.multiplicar = function() {
			$scope.salvarMemoria();
			$scope.operacao = "*";
			$scope.valorMostrado = 0;
		};

		$scope.dividir = function() {
			$scope.salvarMemoria();
			$scope.operacao = "/";
			$scope.valorMostrado = 0;
		};

    $scope.calcularTotal = function() {
			if ($scope.operacao == "+"){
				$scope.valor = parseFloat($scope.valor) + parseFloat($scope.memoria);
			} else if ($scope.operacao == "-"){
				$scope.valor = parseFloat($scope.valor) - parseFloat($scope.memoria);
			} else if ($scope.operacao == "*"){
				$scope.valor = parseFloat($scope.valor) * parseFloat($scope.memoria);
			} else if ($scope.operacao == "/"){
				$scope.valor = parseFloat($scope.valor) / parseFloat($scope.memoria);
			}
      $scope.valorMostrado = $scope.valor;
		};

    $scope.limparValores = function() {
			$scope.valorMostrado = null;
      $scope.operacao = null;
			$scope.memoria = null;
      $scope.valor = null;
		};

  }



}
