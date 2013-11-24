timer-control
=============

TimerControl - A basic Javascript timer class

Usage
-----

```js
var timer = new TimerControl(this);
timer.start({
    duration:5000,
    interval:10,
    onCompletedCb:function(){
        someFunction();
    },
    onIntervalCb:function(elapsed,remaining){
        someOtherFunction(elapsed,remaining);
    }
});
```

For an in-depth example of how to use the class, check out the implementation inside the "timer-control-test.htm" file.
