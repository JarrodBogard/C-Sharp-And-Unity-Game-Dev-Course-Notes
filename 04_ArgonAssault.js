// Lesson 2: Game Design - Argon Assault

// Review & notate

// Lesson 3: How To Add Terrain

// Remember: Orientation of scene layout is important.
//              - be aware of where the x, y, and z axes are pointing before starting a project.
//              - It's common for the bottom left to be the origin.

// Lesson 4: Unity Terrain Tools

// Jitter controls randomization.

// Review & notate!!!

// Lesson 5: How To Use Unity Asset Store

// Review!!!

// Lesson 6: Texturing Terrain In Unity

// Bump map is a catergorization of any layer that deals with the 3D information/look that is portrayed on a 2D surface (i.e. 2D map).
//      - Contained within Bump map is Height map and Normal map.

// Descriptions of each map:
// Bump map: texture with information on how light catches a shape.
//      - this helps make something 2D look 3D.
// Height map: uses white-to-black scale to show height.
//      - uses information from a gray-scale to determine how high or low objects should be represented in 3D.
// Normal map: uses rgb values to indicate x, y, z facing direction (i.e. the direction of each pixel).
//      - different colors for each individual pixel represent how light should be portrayed on an object.

// Summary:
//  1. Height map adds height to objects.
//  2. Normal map adds texture to objects.
//  3. Together they create 3D appearing objects, which are actually 2D.
//      - they make a 2D surface appear 3D.
//  4. Height map and Normal map are part of Bump map.

// Note: Albedo = color.

// Lesson 7: Add Trees To Terrain

// Lesson 8: Master Timeline For Player Rail

// Timeline is a tool that allows for animating objects within a game/scene.
//      - e.g. cut-scenes, cinematic sequences, animate enemies or other non-player objects within a scene, animate objects that move or fall inside a scene, objects that move or fall while the player is moving through a scene, trigger timeline events to occur etc.
//      - Timelines are a way of crafting multiple animations in a scene, not just one single animation.
//      - The animations can be based upon a particular timeing (i.e. timeline).
// Essentially, timeline is a cinematic tool that allows for creating pre-determined moments within a scene/game (based upon a particular animation???).

// Review & notate!!!

// Lesson 9: Animate Enemy Using Timeline

// Lesson 10: Import Player Ship Asset

// When building objects with modules, ensure the pivot points are accurate/realistic and that the game object is placed into a prefab folder upon completion.

// Review

// Lesson 11: Using GetAxis() For Movement

// 1. The Input Manager / Input System (i.e. old system / new system) is the Unity component that listens for the user input and responds accordingly via script instructions.
//      - Alt definition: (Unity listens for the user input and passes it through its input layer (i.e. Input Manager / Input System), and the input layer responds according to what the script instructs it to do based on the specific input???).
//      - (The scripts contain code that tell the Input Manager/System what action should be taken when a specific input is received???).

// The input layer in Unity intreprets (and manages???) the player input so that the script only has to focus on providing instructions based on the type of input received.
//      - the script only communicates with the Unity input layer.
//      - the script does not interact directly with player input.

// Examples:
// Input.GetAxis() - Input Manager syntax
// InputAction.ReavValue<>() - Input System syntax

// Lesson 12: Unity's New Input System

// Multiple keyboard or controller inputs can be set for the same controls using the Input System.

// Lesson 13: Start Moving Our Player

// Review & notate!!!

// Lesson 14: Move Player Using Input

// Lesson 15: Mathf.Clamp() To Constraint Movement

// Lesson 16: How To Set Local Rotation

// Understanding roll, pitch, and yaw:

// 1. These involve different axes and how rotation occurs on them.
//      - the z axis deals with roll rotation.
//      - the x axis deals with pitch rotation.
//      - the y axis deals with yaw rotation.
// 2. Order of rotation is important!
//      - e.g. rotation on the y axis (i.e. yaw rotation) first, followed by the x axis (i.e. pitch rotation) second, will not affect the z axis (roll rotation).
//              - however, if pitch rotation were applied before yaw rotation, then roll rotation would be affected.
// 3. Quaternions deal with calculating rotation on all 3 axes.
//      - e.g. Quaternion.Euler(x,y,z) (i.e. pitch, yaw, roll).
//      - Queternion.Euler() will provide the necessary info for how a game object should be rotating (i.e. localRotation).
//          - it returns the "target" rotation that should be applied to the object.

// Lesson 17: Rotate Ship With Position & Throw

// programmatic thinking of pitch, yaw, roll:

// 1. Pitch and yaw should be coupled to the position of the player on the screen.
// 2. Pitch and roll should be coupled to the control throw, which is the player input.

// Lesson 18: Time To Tune And Tweak

// Cycle for tuning/tweaking:
//  1. Add feature
//  2. Fix bugs
//  3. Tune gameplay
//  4. Playtest

// Lesson 19: Particle System Laser Bullet

// 1. The various catergories used to control particles are called modules.
// 2. Each particle is NOT a game object itself.
//      - the particle system is a component that is added to a game object.
//      - this distinction is important when working on collision with particles.
// 3. Each particle has a material.

// Lesson 19: Exploring Nested Prefabs In Unity

// Review & notate

// Lesson 20: Set Up Firing Input

// Lesson 21: Arrays & Foreach Loops

// 1. If variables are like boxes, then arrays are like boxes to store other boxes.
// 2. Arrays allow for storing multiple objects in one variable.
// 3. Only the same type of objects are allowed to be stored in an array variable.
//      - e.g. string[] arrayName = {"var1", "var2", "var3"};
// 4. A forEach loop is a control flow statement for traversing a collection (e.g. array).
//      - i.e. it's a way of telling Unity, "do this to everything (i.e. every element) in the collection (i.e. array)".
//          - i.e. perform an action on each item/element in the array.
// 5. Example of forEach implementation/iteration:
//      - foreach (ObjectType element in array){ element.SomeMethod(); ...more code... }

// Lesson 22: Deactivating Particle System Emission

// Review!!!

// Lesson 23: Header & Tooltips Attributes

// Lesson 24: Understanding Collisions & Triggers

// Having tree colliders enabled on the terrain collider can cause bugs in-game.

// Review!!!

// Lesson 25: Detecting Particle Collisions

// Review

// Lesson 26: Reload Scene After Collision

// Lesson 27: Create Explosion Particle Effect

// Lesson 28: Trigger Player Explosion

// Lesson 29: Instantiate At Runtime

// Lesson 30: Public Methods In Unity C#

// 1. Classes are by default encapsulated from outside code (i.e. other classes, methods, etc).
//      - by default, the data in one class cannot communicate with the data in another class.
//          - a class does not affect another class.
//      - this sets up scripts to have a "need to know basis" level of access.
//      - this prevents every piece of data and code from accessing everything in the code base.
//          - this helps prevent errors/bugs in the code base.

// 2. The access modifiers that come before a method within a class can be either "private" or "public".
//      - methods are private by default and therefore the private keyword can be left off of them when public access to them is not needed.
//      - adding the "public" access modifier (i.e. the public keyword) before a method allows that method to be called from any other class in the project/directory.

// Review from timestamp 5:00:00

// Lesson 31: Simple User Interface For Score

// Review and notate!!!

// Lesson 32: ToString() To Display Score

// Lesson 33: Enemy Hit Points

// Lesson 34: Set Up Enemy Prefabs

// Lesson 35: Using FindWithTag()

// Review at timestamp 1:00:00!!!

// !!! Review & notate !!!

// Lesson 36: Control Tracks For Enemy Waves

// !!! Review & notate !!!

// Lesson 37: Timeline For Dialogue

// Use shift + left mouse click to resize images while maintaining the same aspect ratio.

// Review & notate!!!

// Lesson 38: Singleton Pattern For Music Player

// Review & notate!!!

// Lesson 39: Sneaky Explosion SFX

// Review

// Lesson 40: Skybox & Lighting

// Review

// Lesson 41: Add Post Processing

// 1. Add effects to the camera to change the look of the game.
//      3 parts:
//          - Volume: where is it located in the game.
//          - Layer: which camera triggers the post processing.
//          - Profile: what are the specific settings for the post processing effects.

// Review and notate!!!

// Lesson 42: Your 3 Minute Experience
