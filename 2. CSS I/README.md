# CSS

* inline > internal > external
* id > class > tag
* id --> unique
* class --> can be same for multiple tags, an element can have more than one class name.
* example:-
```HTML
<img class="name1 name2">
```
```CSS
.name1{}
.name2{}
```
```HTML
<!--Inline css -->
<body style="background-color: blue;">
<hr size="3" noshade>
<!--Internal css -->
<style>
body{
  background-color: powderblue;
}

hr{
  border-color:white;
  border-style: dotted none none;
  border-width:5px;
  height:0px;
  width: 10%;
}
</style>
<!--External css -->
<!--index.html-->
<link rel="stylesheet" href="name.css">
```
```CSS
/*styles.css*/
/*Tag selector*/
body{
  background-color: powderblue;
}

hr{
  border-color:white;
  border-style: dotted none none;
  border-width:5px;
  height:0px;
  width: 10%;
}
/*img{
  background-color: red;
}
/*Class selector*/
.nameofclass{
  background-color: green;
}
/*id selector*/
#idname{
  background-color: red;
}
/*hover tag(psedo class)*/
img:hover{
  background-color: gold;
}
```
