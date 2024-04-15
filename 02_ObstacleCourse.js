// Lesson 2: Game Design - Obstacle Course

// When building a game ask these questions:
// 1. What should the player experience be like.
// 2. What is/are the core mechanics of the game.
// 3. What is the game loop, or what is the goal?

// Lesson 3: Start() & Update()

// Code written in the Start function will be executed when the script is first executed (i.e. when the game is started), and it will be executed just once.
//      - it will only be executed once before the first frame update.

// Code written in the Update function will be executed for every frame that the script is running inside the game, until it is no longer running within the game.
//      - it will be executed once per frame.

// Frames a.k.a ticks

// Lesson 4: Introducing Variables

// Variables store, manipulate and refer to information.
// Each variable has a name.
// Each variable contains data.
// Each variable is of a particular (data) type.
// The type is declared before the variable name.

// A floating number is one that has a decimal place/value.
//      - float is the type.
//      - an f must be added to the end of a floating number.

// A boolean variable is a true or false value.
//      - bool is the type.
//      - true and false are the value options.

// A variable containing characters is a string variable.
//      - string is the type.
//      - the value is wrapped in quotation marks (i.e. "").

// Lesson 7: Time.deltaTime

// Using Time.deltaTime, Unity can determine how long each frame took to execute.
// When multiplied by something, Time.deltaTime makes games "frame rate independent".
//      - For player movement, that something would be an axis.
//      - Frame rate independent means the game behaves the same on any machine.
//          - Slow machines and fast machines alike.
//      - Distance per second (DPS) = unit of movement x FPS x duration of frame.
//          - The unit of movement is one standard unit.
//          - FPS: Frames per second.
//          - Time.deltaTime is the method which calculates the duration of frame.
//          - Typically, the "frame rate independent" speed is too slow so a movement speed multiplier is applied.
//              - Commonly, this is a high-level variable within the parent class/function named moveSpeed.

// Lesson 8: Cinemachine Follow Camera

// Cinemachine is a powerful package that allows for:
//  - Managing multiple cameras in a scene.
//  - Easily create rules for cameras.

// Cinemachine brain can be attached to the main camera in a scene and then configured with rules and logic accordingly.

// NOTE: "Save During Play" is a Cinemachine Virtual Camera option that allows changes made during play to be saved to the scene, and it can be toggled on and off.

// NOTE: It is important that the body property is set to the framing transposer option on the virtual follow camera.

// Lesson 9: Basic Collision

// Add the collider component to a game object to give it collider boundaries.
// Add the rigidbody component to a game object to apply physics to that object.
//      - position and rotation are two sub-properties of the rigidbody component that can be adjusted.

// Lesson 10: Introduction To Methods

// Methods (a.k.a functions) execute blocks of code that make games perform tasks.

// To achieve this:
// 1. Declare and define methods.
// 2. Call/invoke the methods accordingly, when and where they are needed.
//      - Via the script, tell Unity what the methods are and when they should be executed.

// Steps for methods:
// 1. Name the method.
//      - give the method an appropriate name determined by the specific task.
// 2. Describe the method.
//      - use parens following the method name to add any params.
//          - if no params then leave empty.
//      - the method should also describe the return value/type that is expected.
//      - the return type should come before the method name.
//      - if nothing should be returned by the method then use the "void" type.
//      - curly braces define the code block of the method.
//      - all the code tasks are written inside the code block.
//      - each task that the method should perform is called a statement.
//      - all statements should end with a semi-colon.
// 3. Execute the method.
//      - perform the specified task.

// Two common things methods do:
//  1. Return some value/data.
//  2. Receive parameters (i.e. data given to the method) that are necessary for calling the method.
//      - some methods require params (i.e. input data) to perform their specific tasks, which is commonly used to calculate and return an output value, but not always.
//      - params are the variables which store the input data passed into, or received by, the method.
//      - arguments are the input data that is passed into the method when it is is invoked.
//      - arguments should satisfy the parameters of a method.
//          - params take in arguments.
//      - if a method returns a value the return keyword should be used before the return value.
//      - like methods and variables, parameters must specify a data type before the name of the param.
//      - the return type specifies the type of return value that will be returned by the method.
//      - void is used in the return type of a method if no value is returned.
//      - the return type/value will return back to where it was called.
//      - invoking a method will execute the statements defined in the code block of that method.
//          - arguments cab be passed into the method when it is invoked.
// Semi-colons come after code block statements and method invocations.

// Unity's internal logic and algorithms call the Start() and Update methods whenever the play button is clicked in the Unity studio.
//      - They do not have to be called explicitly in the cs script.
//      - These two methods are considered callback methods.

// Lesson 11: Practicing With Methods

// review and notate!!!!!

// Lesson 12: Using OnCollisionEnter()

// Collision scripts will not work on a parent game object???
//      - the collision script must be placed on each nested child object???

// Lesson 13: Using GetComponent<>()

// review and notate!!!!

// Lesson 14: Incrementing A Score

// Lesson 15: Using Time.time

// The directional light (i.e. light source) in unity can be rotated to change the orientation of object shadows.

// Time.time is the simplest/easiest way to set up a timer in Unity.

// An if statement is a type of conditional.
//      - if a condition occurs (i.e. if a condition is met), then do something.
//          - if the specified condition is satisfied, then a task is executed.

// Creating falling objects involves disabling and enabling gravity.

// Lesson 16: If Statements

// To write an if statement:
// 1. Write the if keyword followed by parens.
// 2. Add a condition between the parens.
//      - This will be an expression which evaluates either true or false
// 3. Include statements inside the subsequent code block which will then be executed if the condition is met.
//      - The tasks specified by the statements will then be performed accordingly.
// 4. If the condition is not met then the code block will be ignored/skipped.

// Lesson 17: Caching A Reference

// Caching is a technique of storing frequently used data/info, in memory, so that it can be easily accessed when needed.

// Lesson 18: Using Tags

// Review and notate

// Lesson 19: Rotate An Object

// If a value is not provided to a variable then a default value will be applied.

// Lesson 20: Prepare Our Prefabs

// Review and notate from 5:00:00

// Lesson 21: Build An Obstacle Course
