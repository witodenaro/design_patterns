# Facade Structural Design Pattern

## Problem<br>

Imaging we have a library that provides some out-of-box solution.<br>
It expores a lot of inner-logic objects that the library user must initialize manually<br>
In this example, to boot up the computer, the user must<br>
call all it's support methods to actually run it.

## Solution

We should have a simple interface for the sub-logic inside our 'library'<br>
In this case, we must implement a method called 'run', that will run all the sub-level logic<br>
automatically without any user interaction.<br>
All the user needs to do is to have the 'run' method called.<br>
This way we separate our business logic from the user and in case of any inside-library<br>
updates, the user won't have a need to rewrite the code.
