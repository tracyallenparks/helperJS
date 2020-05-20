# __helper JS Library

The __helper JS library is primarily for making my life easier when coding sites. I found myself using and re-using the same functions over and over again whilst working on various websites, so I knitted them all together into this quick and easily implementable library script. These became a necessity when working on sites that didn't have jQuery or some other library readily available, or the jQuery library was out of date. In many cases, my need for a clean Vanilla JS solution became apparent and thusly this was born. This library can be used in part or in total. Many times I just reference this script to grab the function I need and place it in the script I'm working on at the time.

To use the library after placing in your site/project, access the library itself by `__helper` then call to the appropriate function in the library. 
Example: to place text/string variable `css` in the head as a stylesheet, all you need to do is call in `__helper` then the function for injecting css (`cssInject`) with all the appropriate parameters in place. In full it will look like this:
`__helper.cssInject(css,'thisNewStyle');`

Some functions have been grouped together under sub-libs within `__helper`. One example would be all time functions are placed inside the `__helper.time` function. To access anything in a sub-lib, just call the "sub-lib" after calling in `__helper`, then call in the function. Example: `__helper.time.addDays`

---

## Base Functions ( __helper )

Base functions are the main functions that generally do not fit into any topical category, like time or cookies. Base functions can be accessed directly from the `__helper` call.

### CSS Inject

#### __helper.cssInject(css, id)

Used to append a style tag populated with a string (__css__) in the head. This function checks to make sure that another style with the __id__ is not currently present. This is to ensure that only one stylesheet with the matching __id__ is present. __id__ is expressed as a string. All parameters are required.

_example:_

```javascript
var css = 'p.blue{ color:blue; } p.red{ color:red; } p.black{ color:black; }';
__helper.cssInject(css,'thisNewStyle');
```

_result:_

```html
<style id="thisNewStyle">
    p.blue{ color:blue; } p.red{ color:red; } p.black{ color:black; }
</style>
```

### Find Ancestor

#### __helper.findAncestor(orgin_element, string_to_match)

Used to find the first ascendent parent  element of the given **element** whose tagName, class, or ID match the given **string**.

_example:_

~~~html
<div class="thisOne">
  <div id="thisID">
    <div id="notThis" class="orThis">
      <p class="red">thingy</p>
    </div>
  </div>
</div>
~~~



```javascript
var origin = document.querySelector('p.red');
var lookingForClass = __helper.findAncestor(orgin,'thisOne');
var lookingForTag = __helper.findAncestor(orgin,'div');
var lookingForId = __helper.findAncestor(orgin,'thisID');
```

_result:_

```
$ lookingForClass
> <div class="thisOne"><div id="thisID"><div id="notThis" class="orThis"><p class="red">thingy</p></div></div></div>

$ lookingForTag
> <div id="notThis" class="orThis"><p class="red">thingy</p></div>

$ lookingForId
> <div id="thisID"><div id="notThis" class="orThis"><p class="red">thingy</p></div></div>
```

### Get Parameter

#### __helper.getParam(parameter, url)

Used to extract the value of a given __parameter__ from a given __url__. All parameters are required.

_example:_

```javascript
var url = document.location.href;
var thingy = __helper.getParam('thingy',url);
```

_result:_

```
$ url
> 'https://www.example.site/?foo=bar&thingy=stuff'
$ thingy
> stuff
```

### Get Random Number

#### __helper.getRndNum(min, max)

Used to randomly generate an integer (whole number) between __min__ and __max__, where __min__ and __max__ are expressed as numerical values. __min__ cannot be of greater value to __max__. All parameters are required.
exmaple:

```javascript
var thisNumber = __helper.getRandom(12,100);
```

_result:_

```
$ thisNumber
> 56
```

### Get Random Object

#### __helper.getRndObj(array)

Used to randomly return an object, string, or number from an __array__. If __array__ is not an object, the return is `false`.

_example:_

```javascript
var thisArray = ['thingy','stuff','foo','bar'];
var goof = 7;
var pickSomething = __helper.getRndObj(thisArray);
var pickSomethingElse = __helper.getRndObj(goof);
```

_result:_

```
$ pickSomething
> stuff
$ pickSomethingElse
> false
```

---

## Cookie Functions ( __helper.cookies )

### Make a Cookie (Bake)

#### __helper.cookies.bake(name, value, expireDate)



### Delete a Cookie (Eat)

#### __helper.cookies.eat(name)



### Read a Cookie

#### __helper.cookies.read(name)



---

## Time Functions (__helper.time )



