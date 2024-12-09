import CalculateCircleArea from "./components/calculateCircleArea/calculateCircleArea";
import CalculateSquareArea from "./components/calculateSquareArea/calculateSquareArea";
import CalculateTriangleArea from "./components/calculateTriangleArea/calculateTriangleArea";
import CelsiusToFahrenheit from "./components/celsiusToFahrenheit/celsiusToFahrenheit";
import SayHello from "./components/sayHello/sayHello";
import TotalPrice from "./components/TotalPrice/totalPrice";
import WriteMessage from "./components/writeMessage/WriteMessage";

const title = <h1>Curso de React</h1>;

console.log(title)

const App = () => {
	return <>
		<SayHello text="Iván"/>
		<CalculateSquareArea  number={6}/>
		<CalculateTriangleArea  base={4} height={6}/>
		<CalculateCircleArea radio={4}/>
		<CelsiusToFahrenheit celsius={14}/>
		<TotalPrice price={55}/>
		<WriteMessage name='Ivan' material='plastico' size='3 onzas' note='Color negro'/>
	</>
	;
};

export default App;

