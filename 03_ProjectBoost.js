// Lesson 2: Game Design - Project Boost

// NOTE: Review all game design layouts from each section.

// Lesson 3: Onion Design

// Common Design Questions:
//  1. What features should be included in the game?
//  2. Where should development start?
//  3. What are the priorities?
//  4. What if the timeline is too short to finish the game?
//  5. When is the game complete?

// Onion design focuses on layering features based on importance:
//  1. The core feature is the most important and is most critical to a given game (i.e. the game cannot be made without it included).
//  2. From there add features in order of importance with 2nd, 3rd, 4th...and so on.
//  3. If time runs out, ensure that the most important features have been added and debugged and do not worry about less important ones.
//  4. When adding on a new feature ask this question:
//      - Will it make the core feature better?
//      - All features need to feed into the core feature and make it better.
//  5. Movement is commonly the most important feature of any game.
//  6. Other commonly important features:
//      - World collision (i.e. some type of adversity/challenge).
//      - Level progression (i.e. some type of progression/goal).

// Lesson 4: Unity Units

//  1. Directional flow (i.e. the orientation of the Unity Studio camera) is important when designing games.
//      - e.g. If the game is meant to be a scroll game (i.e. moving from left to right on the x axis) be sure the camera is oriented appropriately so that the game/world/levels are designed inline with that format.
//          - Otherwise, the movement controls and physics might not work properly when playing the game.
//  2. It's good practice to ensure the z-axis (i.e. the depth axis) is "in to" the "world" and the x-axis is going from left to right.
//  3. Directional tips:
//      - +x = right
//      - +y = up
//      - +z = forward
//  4. When creating a new object in the Unity environment, reset the transform component so that it will place the new object at the origin of the environment.
//      - this ensures the world/game is being developed correctly.
//      - when creating a new object, the default is for it to be placed in the center of the scene view, not the point of origin in the world (i.e. position 0 0 0).
//  5. The game should play around the origin of the world (i.e. the midpoint of the world).
//      - the origin is position 0 0 0.
//      - this ensures consistency with position values throughout the entire game/world/environment across all game objects.
//  6. A Unity unit is a relative value equal to 1.
//      - it is a generic unit and does not represent an actual/physical measurement like cm, meters, feet, etc.
//  7. Prefab everything!
//      - prefabs are saved directly to the disk and not just as a scene asset in Unity.

// Lesson 5: Introducing Classes

// The organization of C# with the Unity Game Engine:
//  1. At the highest level is the namespace - UnityEngine
//  2. Within that namespace are classes specific to Unity (i.e. UnityEngine).
//      - classes are a way to group things (i.e. a way to organize code).
//  3. Nested within classes are methods.
//      - the idea of a class is to group similar methods together.
//  4. Nested within methods are code statements.
//      - statements are grouped within methods.
//      - statements determine what tasks are performed when a method is called.
//      - the statements are only performed when the method is called.
//  5. Statements are code instructions for a program.
// Note: Classes and Methods in C#/Unity are capitalized/snakecase and variables are lowercase/camelCase.

// Commonly, there is one class per script and the class name should match the script name.

// The public keyword means that code (i.e. info) within the class can be accessed by/from other classes (i.e. scripts).

// The private keyword means that code (i.e. content) within the class can only be accessed by/from that particular class.

// (needs work) The object (i.e. class) following the colon after the class name describes where the class is receiving its inheritance and functionality from (i.e. what class is the class deriving its properties from).

// (needs work) The class that follows the colon after the class describes where the class is deriving functionality from (i.e. where and what is the class inheriting).
//      - The class is deriving functionality (i.e. methods) and properties from another class (i.e. it is inheriting another classes functionality).

// The namespace is where the derived/inherited classes live.
//      - the UnityEngine is the source of the inherited classes.
//          - it is what allows a class to inherit methods/properties from the derived class and it is where the derived class originated.

// Variables can be stored in classes or methods within a class.
//      - high-level (i.e. global) variables can be accessed by any methods within a class.
//      - variables nested inside of methods can only be accessed by that particular method.

// Classes summary:
//  1. Classes are used to organize code.
//      - Classes are capitlaized/snakecase.
//  2. Classes are containers for variables and methods that allow for grouping similar things together.
//  3. Usually the aim/goal is for a class to do one main thing and not multiple things (i.e. it should have one main priority).
//      - this makes reading code easier.
//      - it makes code easier to debug.
//      - it makes it easier for multiple devs to worn on a project.
//  4. Classes can be created (i.e. custom classes can be created).
//  5. Generally, a new class is created each time a new script is created.
//      - a script should be responsible for one feature.
//          - e.g. (movement, collision, score, specific ability, etc.)
//  6. While it is possible to have multiple classes per script, a script (i.e. cs file) should contain only one class per script/file.
//  7. Where/when possible, encapsulate code.
//      - Code should have a "need to know basis" level of access.
//          - e.g. only methods in the movement class can/should alter a player's movement speed.
//  8. Unity has many classes that are able to be accessed.
//      - These classes are pre-built by Unity and contain many useful methods and variables to help build games.
//      - By accessing the class, the class content can be accessed.
//      - To access class content (i.e. methods/properties/etc) of a particular class, type the class name and then use the dot operator (i.e. dot notation) to access a particular method or property (e.g. ClassName.MethodName()) on that class.
//  9. Static properties are variables/values that can be accessed on a class.
//  10. Static methods are functions that perform specific tasks.
//      - They commonly return a value.

// Lesson 6: Basic Input Binding

// Control + shift + space will show the signature options attached to a particular class/method/variable in vs code.

// Lesson 7: Using AddRelativeForce()

// 1. The Rigidbody component is what always objects to have physics applied to them.
// 2. A member variable is one that is available/accessible at every level in the class because it is defined at the highest level within the class.
//      - it can be accessed in any method, code block, if statement, etc, within the class it is defined in.

// Review and notate timestamp 5:00:00 on AddRelativeForce() & vectors/Vector3

// Lesson 8: Variable For Thrusting

// Lesson 9: Transform.Rotate() Our Rocket

// The z-axis (depth axis) is used to rotate objects vertically - from a left to right or right to left perspective - in games that play along the x-axis (i.e. from left to right).
//      - Alt definition: Vertical (i.e. up & down) rotation along the x-axis is manipulated by using the z-axis, for games that play along the x-axis (i.e. left to right).
//      - If a game plays along the x-axis, from left to right or right to left, the z-axis rotation property can be manipulated to cause/implement vertical rotation of an object along the x-axis (i.e. "end over end" rotation of an object from right to left or left to right).

// NOTE: Methods in C# are implicitly private unless the public keyword is placed in front of them.
//      - (The private keyword is therefore unnecessary to add in front of a method to make it private???).

// NOTE: A public method is one that can be used by other classes.
//          - Classes other than the one it is defined in.
//          - a private method can only be accessed/used by the class it is defined in.

// Lesson 10: Rigidbody Constraints

// 1. When a prefab instance includes components that should be included on the prefab, apply all overrides to the prefab to sync the prefab with the updated instance.
//      - Alternatively, revert all to revert the instance back to the prefab specs, or click on the components individually to choose specific components to apply or revert.

// Review and notate second half of lecture involving physics, drag, and gravity!!!

// Lesson 11: Our Source Control Repo

// Source control terminology:

//  1. Source Control: a system for tracking and managing changes to the code base of a project.
//  2. Git: a type of version control system (VCS) that tracks changes to files.
//  3. GitLab, or GitHub: Repository hosting service (i.e. web-based, online).
//  4. Repository (Repo): Directory or storage space for projects.
//  5. SourceTree: Desktop client to help view repos visually.
//      - otherwise, it is a command line interface approach.

// Benefits of source control:
//  1. Backups
//  2. Rollbacks
//  3. Multiple branches for exploring different feature implementations
//  4. Collaboration

// Lesson 12: Unity Audio Introduction

// Main components of game audio:
//  1. Audio Listener - to "hear" audio.
//      - the audio listener is attached to the main camera, by default, because this is the view window of the game (i.e. the player view).
//  2. Audio Source - to "play" audio.
//      - the audio source should be attached to the object that is "making" the sound.
//  3. Audio File - the "sounds" that get played.
//      - Ogg, mp3, and WAV files are the most common audio files in Unity.
//          - Avoid using WAV as they are much larger files.
//          - Use Ogg when possible as they are lightweight files.

// Lesson 13: Play AudioSource SFX

// Lesson 14: Switch Statements

// 1. Switch statements are conditionals like if/else statements.
//      - when a condition is met a specified task is performed.
// 2. Switch statements allow for comparing a single variable - variables can change or "vary" - to a series of constants (i.e. things that are unchanging - have a "constant" value).
//      - tags are constants.
//      - the value for a collision is a variable (e.g. the "other" param for the OnCollisionEnter() method).
// 3. Switch statements start with the switch keyword followed by parens which contain the variable as its param.
//      - the case statements are then placed between a set of curly braces.
//      - each case has a constant value that is compared to the variable value.
//      - if a case statement evaluates true then the code statements are executed for that specific case.
//      - once executed the code statements are followed by the break keyword to ensure the switch statement is terminated and no further case statements are evaluated or executed.
//          - the code statements of each case commonly contain methods which are executed and then return a value, but not always (i.e. their actions can vary depending on the purpose of the switch statement).
//              - a case statement can contain multiple methods as part of its code statement.
//      - the last case statement should be a default case, which starts with the default keyword and is executed if no other case statement conditions within the switch statement are met.
//          - it is the same as the else statement portion of an if/else statement.

// Lesson 15: Respawn Using SceneManager

// Lesson 16: Load Next Level

// Using Invoke() allows for calling/executing a method on a delay specified in seconds.
// Syntax: Invoke("MethodName", delayInSeconds);
// Pros: Quick and easy to use.
// Cons: String reference; not as performant as using a Coroutine.

// Note: Scripts, when attached to game objects, become components.

// Lesson 17: Multiple Audio Clips

// Order of elements within cs files from top to bottom:
// 1. Variables
//      - Parameters: tuning, typically set in the editor (i.e. SerializeField vars).
//      - Cache: e.g. references for readability or performance.
//          - Typically, assigned in Start method.
//          - The Start() method is where references are cached in a cs file.
//      - State: private instance (member) variables
// 2. Start & Update methods
// 3. Public methods
// 4. Private methods

// Lesson 18: Bool Variable For State

// After boolean variables have been switched/toggled and used in a file to satisfy a condition, which triggers a specific task, it is important to reset them back to their original state, at some point.
//      - if a scene is automatically reloaded then the bool variable will be automatically reset as well.

// NOTE: Always make sure prefabs are updated to most recent changes/updates.

// Lesson 19: Make Rocket Look Spiffy

// An instance is created from a prefab.
//  - changes to an instance are not applied to the prefab by default.
//      - when an instance diverges from its prefab the changes/instance will be marked with a small "+" sign to show that something has changed on the instance that is not applied to the prefab.
//  - changes can be applied to the prefab by clicking on the instance and then the override tab and applying individual components or all components.
//      - the changes can also be reverted back to the prefab configuration.
//  - additionally, objects can be nested within instances and are indented under the instance in the heirarchy tab.
//      - i.e. objects can be nested within other objects.

// The position of children/nested objects is relative to the parent.
//      - reset the position of the nested object to 0 0 0 to ensure the new object is in the center of the parent instance/prefab.
// Children/nested objects inherit their parent scale.
//      - remove the mesh renderer and box collider when creating nested objects on an instance/prefab to ensure the scale and rotations are not thrown off when the nested object is initially created.
// NOTE: All transform properties for nested children objects of prefabs/instances are relative to the parent object.

// Lesson 20: How To Trigger Particles

// 1. The particle system is an effect which has an emitter that emits particles.
// 2. The particle system is a component which is added to a game object.
// 3. Game objects become the type of the components they have on them.
// 4. In Unity, pink is the default color on a game object when it does not have a material.
// 5. The particle system has modules attached to it which control the particle system behavior.
// 6. Do not drag particles from the prefab folder onto the script.
//      - Drag the particles attached to the prefab object onto the script after they have been correctly position on the prefab object.
//          - Drag the particles that are children on the game object that is using them.

// Lesson 21: Particles For Rocket Boosters

// Review & notate

// Lesson 22: Refactor With Extract Method

// 1. Use ctrl + . to extract highlighted code statements into their own method.
//      - This will cut and paste the code statements into a new method and create and place a method invocation for that new method in the place of where the code was cut.
// 2. Rename all references to a method or vaiable name by highlighting the name and pressing f2, then provide a new name and press enter to apply the name change.
// 3. Typically, a file starts with the methods with the highest level of abstraction and are in descending order to the lowest level of abstraction.

// Lesson 23: Add Cheat / Debug Keys

// Lesson 24: Make Environment From Cubes

// Lesson 25: How To Add Lights In Unity

// 1. The direction light object is the main light source for a scene and is commonly referred to as the sun.

// 2. There is also environmental lighting associated with the background/atmosphere.
// 3. Scene lights are another source of light within a scene.
//      - these are point lights or spot lights that can be added to game objects within the scene.
//      - point lights are like lighbulbs.
//          - point lights have an orbital range that they illuminate.
//          - the brightest area is at the center of the orb and the light becomes dimmer further away from the center.
//              - the range is absolute and no light leaves the range that is specified.
//      - spot lights are cone shaped lighting objects.
//          - the light is focused on a specific area in the shape of a cone.

// Lesson 26: Move Obstacle With Code

// Review & notate!!!

// Lesson 27: Mathf.Sin() For Oscillation

// Review & notate!!!

// Lesson Protect Against NaN Error

// 1. Two floats can vary by a tiny amount.
// 2. It's unpredictable to use "==" when making comparisons between two floats.
// 3. Always specify the acceptable difference.
// 4. The smallest float is Mathf.Epsilon.
// 5. Always compare to this rather than zero.
// e.g. if (someVar <= Mathf.Epsilon) { return; }

// Lesson 28: Designing Level Moments

// 1. Design "moments" and then expand them into levels. Moments that use the environment:
//      e.g. fly under or fly over obstacles, fly through gaps, timing through moving obstacles, land on moving platforms, fly through tunnels, etc.
//      - these focus on the environment and geometry of the scenes.
// 2. Piece together moments to turn them into bigger level experiences.
// 3. Moments can also be created by simply tuning the existing game components/properties.
//      e.g. slower movement, faster movement, darker level, closer or further camera view, bigger or smaller player, etc.

// Review!!!

// Lesson 29: Quit Application

// Lesson 30: How To Build & Publish A Game

// Review & notate!!!
