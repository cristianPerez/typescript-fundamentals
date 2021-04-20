# typescript-fundamentals

Types in Typescript:

Explicit:
We can define explisit variables.
We have to use two dots  -> : 
Variable name : Type
Two dots allow us to specify the type of the variable.
const fullName: string

Infered:
Typescript have the hability to deduce the type in function
of a value.
We just need to assign one value in a variable.
Variable name  = Value
const fullName = 'Carlos'

Basic Types
Primitives types:

Number
Boolean
String
Array
Tuple
Enum
Any
Void
Null
Undefined
Never
Object

___________________________________________
Type: Number
___________________________________________
We can work with:
Numeric values, integer and decimal values.

Since ES6:
Hexadecimal values
Binary values
Octal values

___________________________________________
Type: Boolean
___________________________________________
Unic values true or false.

Type: String
Type of data for working with textual data or text.
In typescript you can use double quote or single quote.

Since ES6:
We can use template string.
Using the back quote / backtick
Allow multi line of text, including enter and backspace.
expresions or embebed variables.

___________________________________________
Type: Any
___________________________________________
Use to capture dynamic values.
The values can change their type in a long time.
Is common to use it with:
  * External APIs.
  * Third party libraries.

Is not recommended to use any, just try to use in 
extremely cases when you don't know the data type.

___________________________________________
Type: Void
___________________________________________
Is the opposite to Any, it minds the absence of value.
Normally used to specify the type of data return in functions.
Also you can use Void type to save variables with value null or 
undefined.

___________________________________________
Type: Never
___________________________________________
Represents the type of value that never happens.
Usually is used when the funtions trigger any exception,
Or also when the function never returns a value, you can
see that case on infinite loops.

___________________________________________
Type: Null & undefined
___________________________________________
You can use both values like a type.
Null and Undefined are subtypes of Any type.

Using the following command we can avoid the null or undefined 
assignations.
tsc --watch --strictNullChecks

Another option is in the tsconfig.json file, change the 
following flags:
"strict": true,
"strictNullChecks": true,
And that's it.

___________________________________________
Type: object
___________________________________________
Is the type of data which represents any non primitive type.
like number, string, boolean, null, undefined, etc.

Object vs object
Object: is an instance from the Object class in js.
object: is a type for non primitive values, with this type
you cannot access to the object properties.


___________________________________________
Type: Array
___________________________________________
In the same way of js, typescript allow us to define
an array like a collection of values.
The Array is using two notations:
Type[] -> string[]
Generics:
Array<Type> -> Array<String>

___________________________________________
Type: Tuple
___________________________________________
Allow us to represent a collection of data,
using the sintaxis of the Arrays.

the only condition is type of the data need to be different.

___________________________________________
Type: Enum
___________________________________________
Allow us to create a collection of values with name,
usually that collections of values are numbers, or static files
like week days, Colors etc.
Friendly name for numeric values.

For extend several enums, we can use
Object.assign({}, FirstEnum, SecondEnum);
Or just sprite operator.
const newEnum = {
  ...FirstEnum,
  ...SecondEnum
};

___________________________________________
Types UNION
___________________________________________
We can join different types in typescript,
could be more than two or three.
We can use the pipe operator |.

___________________________________________
Alias
___________________________________________
We can create a new name for a mix of types.
The Alias can be applied to a collection of types.
You have to use the reserved word called type.

___________________________________________
Literal Types
___________________________________________
Typescript allow us to create personalized types
using characters.

We can define a variables with a collection of
different values, but the type of these values are string.

You can use strings or characters like a types
combined with the pipe ('|') symbol. 

___________________________________________
Assertion of types
___________________________________________
Is really similar to casting of types in
another languages of programming.
You can use two kinds of syntax:
<Angle Bracket> and (Variable as type)
