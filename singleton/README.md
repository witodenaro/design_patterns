# Problem
<br>
Imaging having a database connection class within a file.<br>
Whenever some other part of the code wants to refer the database, it should<br>
import the DB connection class and create a new instance.
<br>
This way, we have a lot of DB connection instances all over the code.<br>
<code>file1.js requires the DB and creates a new instance, file2.js does the same</code>

# Solution
<br>
Provide the rest of the code with the initialized instance<br>
This way, whenever some part of the code will try to reach the database<br>
It will use the existing connection, instead of creating fresh new one<br>
<code>Results in having only 1 instance over all the application</code>