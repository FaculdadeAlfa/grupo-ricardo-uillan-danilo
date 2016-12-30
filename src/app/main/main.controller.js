export class MainController {
  constructor ($scope) {
    'ngInject';

    $scope.valorMostrado = '';
    $scope.historico = '';
		$scope.valor = null;
    $scope.memoria = null;
		$scope.operacao = null;

    $scope.salvarMemoria = function() {
				$scope.memoria = parseFloat($scope.valorMostrado);
		};

    $scope.salvarValor = function(valor) {
      $scope.historico += valor;
      if($scope.valorMostrado === 0 || $scope.valorMostrado === '0'){
        $scope.valorMostrado = "";
      }
      $scope.valorMostrado += valor.toString();
      $scope.valor = parseFloat($scope.valorMostrado);

		};

    $scope.somar = function() {
			$scope.salvarMemoria();
			$scope.operacao = "+";
			$scope.valorMostrado = 0;
      $scope.historico += ' + ';
		};

		$scope.subtrair = function() {
			$scope.salvarMemoria();
			$scope.operacao = "-";
			$scope.valorMostrado = 0;
      $scope.historico += ' - ';
		};

		$scope.multiplicar = function() {
			$scope.salvarMemoria();
			$scope.operacao = "*";
			$scope.valorMostrado = 0;
      $scope.historico += ' * ';
		};

		$scope.dividir = function() {
			$scope.salvarMemoria();
			$scope.operacao = "/";
			$scope.valorMostrado = 0;
      $scope.historico += ' / ';
		};

    $scope.calcularTotal = function() {
			if ($scope.operacao == "+"){
				$scope.valor = parseFloat($scope.valor) + parseFloat($scope.memoria);
			} else if ($scope.operacao == "-"){
				$scope.valor = parseFloat($scope.memoria) - parseFloat($scope.valor);
			} else if ($scope.operacao == "*"){
				$scope.valor = parseFloat($scope.valor) * parseFloat($scope.memoria);
			} else if ($scope.operacao == "/"){
				$scope.valor = parseFloat($scope.memoria) / parseFloat($scope.valor);
			}
      $scope.valorMostrado = $scope.valor;
      $scope.historico = $scope.valor;
		};

    $scope.limparValores = function() {
      $scope.limparValorMostrado();
			$scope.historico = "";
      $scope.operacao = "";
			$scope.memoria = "";
      $scope.valor = "";
		};

    $scope.limparValorMostrado = function() {
    	$scope.valorMostrado = "";
    }

  }



}
