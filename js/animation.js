
//easing functions

/**
 * Easing equation function for a simple linear tweening, with no easing.
 *
 * @param t        Current time (in frames or seconds).
 * @return        The correct value.
 */
 const M_PI = 3.14159265358979323846;
 const M_PI_2 = M_PI / 2;
 
function easeNone(progress)
{
    return progress;
}
 
/**
 * Easing equation function for a quadratic (t^2) easing in: accelerating from zero velocity.
 *
 * @param t        Current time (in frames or seconds).
 * @return        The correct value.
 */
function easeInQuad(t)
{
    return t*t;
}
 
/**
* Easing equation function for a quadratic (t^2) easing out: decelerating to zero velocity.
*
* @param t        Current time (in frames or seconds).
* @return        The correct value.
*/
function easeOutQuad(t)
{
    return -t*(t-2);
}
 
/**
 * Easing equation function for a quadratic (t^2) easing in/out: acceleration until halfway, then deceleration.
 *
 * @param t        Current time (in frames or seconds).
 * @return        The correct value.
 */
function easeInOutQuad(t)
{
    t*=2.0;
    if (t < 1) {
        return t*t/(2);
    } else {
        --t;
        return -0.5 * (t*(t-2) - 1);
    }
}
 
/**
 * Easing equation function for a quadratic (t^2) easing out/in: deceleration until halfway, then acceleration.
 *
 * @param t        Current time (in frames or seconds).
 * @return        The correct value.
 */
function easeOutInQuad(t)
{
    if (t < 0.5) return easeOutQuad (t*2)/2;
    return easeInQuad((2*t)-1)/2 + 0.5;
}
 
/**
 * Easing equation function for a cubic (t^3) easing in: accelerating from zero velocity.
 *
 * @param t        Current time (in frames or seconds).
 * @return        The correct value.
 */
function easeInCubic(t)
{
    return t*t*t;
}
 
/**
 * Easing equation function for a cubic (t^3) easing out: decelerating from zero velocity.
 *
 * @param t        Current time (in frames or seconds).
 * @return        The correct value.
 */
function easeOutCubic(t)
{
    t-=1.0;
    return t*t*t + 1;
}
 
/**
 * Easing equation function for a cubic (t^3) easing in/out: acceleration until halfway, then deceleration.
 *
 * @param t        Current time (in frames or seconds).
 * @return        The correct value.
 */
function easeInOutCubic(t)
{
    t*=2.0;
    if(t < 1) {
        return 0.5*t*t*t;
    } else {
        t -= 2.0;
        return 0.5*(t*t*t + 2);
    }
}
 
/**
 * Easing equation function for a cubic (t^3) easing out/in: deceleration until halfway, then acceleration.
 *
 * @param t        Current time (in frames or seconds).
 * @return        The correct value.
 */
function easeOutInCubic(t)
{
    if (t < 0.5) return easeOutCubic (2*t)/2;
    return easeInCubic(2*t - 1)/2 + 0.5;
}
 
/**
 * Easing equation function for a quartic (t^4) easing in: accelerating from zero velocity.
 *
 * @param t        Current time (in frames or seconds).
 * @return        The correct value.
 */
function easeInQuart(t)
{
    return t*t*t*t;
}
 
/**
 * Easing equation function for a quartic (t^4) easing out: decelerating from zero velocity.
 *
 * @param t        Current time (in frames or seconds).
 * @return        The correct value.
 */
function easeOutQuart(t)
{
    t-= 1.0;
    return - (t*t*t*t- 1);
}
 
/**
 * Easing equation function for a quartic (t^4) easing in/out: acceleration until halfway, then deceleration.
 *
 * @param t        Current time (in frames or seconds).
 * @return        The correct value.
 */
function easeInOutQuart(t)
{
    t*=2;
    if (t < 1) return 0.5*t*t*t*t;
    else {
        t -= 2.0;
        return -0.5 * (t*t*t*t- 2);
    }
}
 
/**
 * Easing equation function for a quartic (t^4) easing out/in: deceleration until halfway, then acceleration.
 *
 * @param t        Current time (in frames or seconds).
 * @return        The correct value.
 */
function easeOutInQuart(t)
{
    if (t < 0.5) return easeOutQuart (2*t)/2;
    return easeInQuart(2*t-1)/2 + 0.5;
}
 
/**
 * Easing equation function for a quintic (t^5) easing in: accelerating from zero velocity.
 *
 * @param t        Current time (in frames or seconds).
 * @return        The correct value.
 */
function easeInQuint(t)
{
    return t*t*t*t*t;
}
 
/**
 * Easing equation function for a quintic (t^5) easing out: decelerating from zero velocity.
 *
 * @param t        Current time (in frames or seconds).
 * @return        The correct value.
 */
function easeOutQuint(t)
{
    t-=1.0;
    return t*t*t*t*t + 1;
}
 
/**
 * Easing equation function for a quintic (t^5) easing in/out: acceleration until halfway, then deceleration.
 *
 * @param t        Current time (in frames or seconds).
 * @return        The correct value.
 */
function easeInOutQuint(t)
{
    t*=2.0;
    if (t < 1) return 0.5*t*t*t*t*t;
    else {
        t -= 2.0;
        return 0.5*(t*t*t*t*t + 2);
    }
}
 
/**
 * Easing equation function for a quintic (t^5) easing out/in: deceleration until halfway, then acceleration.
 *
 * @param t        Current time (in frames or seconds).
 * @return        The correct value.
 */
function easeOutInQuint(t)
{
    if (t < 0.5) return easeOutQuint (2*t)/2;
    return easeInQuint(2*t - 1)/2 + 0.5;
}
 
/**
 * Easing equation function for a sinusoidal (sin(t)) easing in: accelerating from zero velocity.
 *
 * @param t        Current time (in frames or seconds).
 * @return        The correct value.
 */
function easeInSine(t)
{
    return (t == 1.0) ? 1.0 : -Math.cos(t * M_PI_2) + 1.0;
}
 
/**
 * Easing equation function for a sinusoidal (sin(t)) easing out: decelerating from zero velocity.
 *
 * @param t        Current time (in frames or seconds).
 * @return        The correct value.
 */
function easeOutSine(t)
{
    return Math.sin(t* M_PI_2);
}
 
/**
 * Easing equation function for a sinusoidal (sin(t)) easing in/out: acceleration until halfway, then deceleration.
 *
 * @param t        Current time (in frames or seconds).
 * @return        The correct value.
 */
function easeInOutSine(t)
{
    return -0.5 * (Math.cos(M_PI*t) - 1);
}
 
/**
 * Easing equation function for a sinusoidal (sin(t)) easing out/in: deceleration until halfway, then acceleration.
 *
 * @param t        Current time (in frames or seconds).
 * @return        The correct value.
 */
function easeOutInSine(t)
{
    if (t < 0.5) return easeOutSine (2*t)/2;
    return easeInSine(2*t - 1)/2 + 0.5;
}
 
/**
 * Easing equation function for an exponential (2^t) easing in: accelerating from zero velocity.
 *
 * @param t        Current time (in frames or seconds).
 * @return        The correct value.
 */
function easeInExpo(t)
{
    return (t==0 || t == 1.0) ? t : Math.pows(2.0, 10 * (t - 1)) - 0.001;
}
 
/**
 * Easing equation function for an exponential (2^t) easing out: decelerating from zero velocity.
 *
 * @param t        Current time (in frames or seconds).
 * @return        The correct value.
 */
function easeOutExpo(t)
{
    return (t==1.0) ? 1.0 : 1.001 * (-Math.pow(2.0, -10 * t) + 1);
}
 
/**
 * Easing equation function for an exponential (2^t) easing in/out: acceleration until halfway, then deceleration.
 *
 * @param t        Current time (in frames or seconds).
 * @return        The correct value.
 */
function easeInOutExpo(t)
{
    if (t==0.0) return 0.0;
    if (t==1.0) return 1.0;
    t*=2.0;
    if (t < 1) return 0.5 * Math.pow(2.0, 10 * (t - 1)) - 0.0005;
    return 0.5 * 1.0005 * (-Math.pow(2.0, -10 * (t - 1)) + 2);
}
 
/**
 * Easing equation function for an exponential (2^t) easing out/in: deceleration until halfway, then acceleration.
 *
 * @param t        Current time (in frames or seconds).
 * @return        The correct value.
 */
function easeOutInExpo(t)
{
    if (t < 0.5) return easeOutExpo (2*t)/2;
    return easeInExpo(2*t - 1)/2 + 0.5;
}
 
/**
 * Easing equation function for a circular (sqrt(1-t^2)) easing in: accelerating from zero velocity.
 *
 * @param t        Current time (in frames or seconds).
 * @return        The correct value.
 */
function easeInCirc(t)
{
    return -(Math.sqrt(1 - t*t) - 1);
}
 
/**
 * Easing equation function for a circular (sqrt(1-t^2)) easing out: decelerating from zero velocity.
 *
 * @param t        Current time (in frames or seconds).
 * @return        The correct value.
 */
function easeOutCirc(t)
{
    t-= (1.0);
    return Math.sqrt(1 - t* t);
}
 
/**
 * Easing equation function for a circular (sqrt(1-t^2)) easing in/out: acceleration until halfway, then deceleration.
 *
 * @param t        Current time (in frames or seconds).
 * @return        The correct value.
 */
function easeInOutCirc(t)
{
    t*=(2.0);
    if (t < 1) {
        return -0.5 * (Math.sqrt(1 - t*t) - 1);
    } else {
        t -= (2.0);
        return 0.5 * (Math.sqrt(1 - t*t) + 1);
    }
}
 
/**
 * Easing equation function for a circular (sqrt(1-t^2)) easing out/in: deceleration until halfway, then acceleration.
 *
 * @param t        Current time (in frames or seconds).
 * @return        The correct value.
 */
function easeOutInCirc(t)
{
    if (t < 0.5) return easeOutCirc (2*t)/2;
    return easeInCirc(2*t - 1)/2 + 0.5;
}
 
function easeInElastic_helper(t, b, c, d, a, p)
{
    if (t==0) return b;
    t_adj = t / d;
    if (t_adj==1) return b+c;
    
    s;
    if(a <  Math.abs(c)) {
        a = c;
        s = p / 4.0;
    } else {
        s = p / (2 * M_PI) *  Math.asin(c / a);
    }
 
    t_adj -= 1.0;
    return -(a*Math.pow(2.0,10*t_adj) * Math.sin( (t_adj*d-s)*(2*M_PI)/p )) + b;
}
 
/**
 * Easing equation function for an elastic (exponentially decaying sine wave) easing in: accelerating from zero velocity.
 *
 * @param t        Current time (in frames or seconds).
 * @param a        Amplitude.
 * @param p        Period.
 * @return        The correct value.
 */
function easeInElastic(t, a, p)
{
    return easeInElastic_helper(t, 0, 1, 1, a, p);
}
 
function easeOutElastic_helper(t, c, a, p)
{
    if (t==0) return 0;
    if (t==1) return c;
 
    s;
    if(a < c) {
        a = c;
        s = p / 4.0;
    } else {
        s = p / (2 * M_PI) *  Math.asin(c / a);
    }
 
    return (a*Math.pow(2.0,-10*t) * Math.sin( (t-s)*(2*M_PI)/p ) + c);
}
 
/**
 * Easing equation function for an elastic (exponentially decaying sine wave) easing out: decelerating from zero velocity.
 *
 * @param t        Current time (in frames or seconds).
 * @param a        Amplitude.
 * @param p        Period.
 * @return        The correct value.
 */
function easeOutElastic(t, a, p)
{
    return easeOutElastic_helper(t, 0, 1, 1, a, p);
}
 
/**
 * Easing equation function for an elastic (exponentially decaying sine wave) easing in/out: acceleration until halfway, then deceleration.
 *
 * @param t        Current time (in frames or seconds).
 * @param a        Amplitude.
 * @param p        Period.
 * @return        The correct value.
 */
function easeInOutElastic(t, a, p)
{
    if (t==0) return 0.0;
    t*=2.0;
    if (t==2) return 1.0;
 
    s;
    if(a < 1.0) {
        a = 1.0;
        s = p / 4.0;
    } else {
        s = p / (2 * M_PI) *  Math.asin(1.0 / a);
    }
 
    if (t < 1) return -.5*(a*Math.pow(2.0,10*(t-1)) * Math.sin( (t-1-s)*(2*M_PI)/p ));
    return a*Math.pow(2.0,-10*(t-1)) * Math.sin( (t-1-s)*(2*M_PI)/p )*.5 + 1.0;
}
 
/**
 * Easing equation function for an elastic (exponentially decaying sine wave) easing out/in: deceleration until halfway, then acceleration.
 *
 * @param t        Current time (in frames or seconds).
 * @param a        Amplitude.
 * @param p        Period.
 * @return        The correct value.
 */
function easeOutInElastic(t, a, p)
{
    if (t < 0.5) return easeOutElastic_helper(t*2, 0, 0.5, 1.0, a, p);
    return easeInElastic_helper(2*t - 1.0, 0.5, 0.5, 1.0, a, p);
}
 
/**
 * Easing equation function for a back (overshooting cubic easing: (s+1)*t^3 - s*t^2) easing in: accelerating from zero velocity.
 *
 * @param t        Current time (in frames or seconds).
 * @param s        Overshoot ammount: higher s means greater overshoot (0 produces cubic easing with no overshoot, and the default value of 1.70158 produces an overshoot of 10 percent).
 * @return        The correct value.
 */
function easeInBack(t, s)
{
    return t*t*((s+1)*t - s);
}
 
/**
 * Easing equation function for a back (overshooting cubic easing: (s+1)*t^3 - s*t^2) easing out: decelerating from zero velocity.
 *
 * @param t        Current time (in frames or seconds).
 * @param s        Overshoot ammount: higher s means greater overshoot (0 produces cubic easing with no overshoot, and the default value of 1.70158 produces an overshoot of 10 percent).
 * @return        The correct value.
 */
function easeOutBack(t, s)
{
    t-= (1.0);
    return t*t*((s+1)*t+ s) + 1;
}
 
/**
 * Easing equation function for a back (overshooting cubic easing: (s+1)*t^3 - s*t^2) easing in/out: acceleration until halfway, then deceleration.
 *
 * @param t        Current time (in frames or seconds).
 * @param s        Overshoot ammount: higher s means greater overshoot (0 produces cubic easing with no overshoot, and the default value of 1.70158 produces an overshoot of 10 percent).
 * @return        The correct value.
 */
function easeInOutBack(t, s)
{
    t *= 2.0;
    if (t < 1) {
        s *= 1.525;
        return 0.5*(t*t*((s+1)*t - s));
    } else {
        t -= 2;
        s *= 1.525;
        return 0.5*(t*t*((s+1)*t+ s) + 2);
    }
}
 
/**
 * Easing equation function for a back (overshooting cubic easing: (s+1)*t^3 - s*t^2) easing out/in: deceleration until halfway, then acceleration.
 *
 * @param t        Current time (in frames or seconds).
 * @param s        Overshoot ammount: higher s means greater overshoot (0 produces cubic easing with no overshoot, and the default value of 1.70158 produces an overshoot of 10 percent).
 * @return        The correct value.
 */
function easeOutInBack(t, s)
{
    if (t < 0.5) return easeOutBack (2*t, s)/2;
    return easeInBack(2*t - 1, s)/2 + 0.5;
}
 
function easeOutBounce_helper(t, c, a)
{
    if (t == 1.0) return c;
    if (t < (4/11.0)) {
        return c*(7.5625*t*t);
    } else if (t < (8/11.0)) {
        t -= (6/11.0);
        return -a * (1. - (7.5625*t*t + .75)) + c;
    } else if (t < (10/11.0)) {
        t -= (9/11.0);
        return -a * (1. - (7.5625*t*t + .9375)) + c;
    } else {
        t -= (21/22.0);
        return -a * (1. - (7.5625*t*t + .984375)) + c;
    }
}
 
/**
 * Easing equation function for a bounce (exponentially decaying parabolic bounce) easing out: decelerating from zero velocity.
 *
 * @param t        Current time (in frames or seconds).
 * @param a        Amplitude.
 * @return        The correct value.
 */
function easeOutBounce(t, a)
{
    return easeOutBounce_helper(t, 1, a);
}
 
/**
 * Easing equation function for a bounce (exponentially decaying parabolic bounce) easing in: accelerating from zero velocity.
 *
 * @param t        Current time (in frames or seconds).
 * @param a        Amplitude.
 * @return        The correct value.
 */
function easeInBounce(t, a)
{
    return 1.0 - easeOutBounce_helper(1.0-t, 1.0, a);
}
 
 
/**
 * Easing equation function for a bounce (exponentially decaying parabolic bounce) easing in/out: acceleration until halfway, then deceleration.
 *
 * @param t        Current time (in frames or seconds).
 * @param a        Amplitude.
 * @return        The correct value.
 */
function easeInOutBounce(t, a)
{
    if (t < 0.5) return easeInBounce (2*t, a)/2;
    else return (t == 1.0) ? 1.0 : easeOutBounce (2*t - 1, a)/2 + 0.5;
}
 
/**
 * Easing equation function for a bounce (exponentially decaying parabolic bounce) easing out/in: deceleration until halfway, then acceleration.
 *
 * @param t        Current time (in frames or seconds).
 * @param a        Amplitude.
 * @return        The correct value.
 */
function easeOutInBounce(t, a)
{
    if (t < 0.5) return easeOutBounce_helper(t*2, 0.5, a);
    return 1.0 - easeOutBounce_helper (2.0-2*t, 0.5, a);
}
 
function sinProgress(value)
{
    return Math.sin((value * M_PI) - M_PI_2) / 2 + (0.5);
}

function smoothBeginEndMixFactor(value)
{
    return Math.min(Math.max(1 - value * 2 + (0.3), (0.0)), (1.0));
}
 
// SmoothBegin blends Smooth and Linear Interpolation.
// Progress 0 - 0.3      : Smooth only
// Progress 0.3 - ~ 0.5  : Mix of Smooth and Linear
// Progress ~ 0.5  - 1   : Linear only
 
/**
 * Easing function that starts growing slowly, then increases in speed. At the end of the curve the speed will be constant.
 */
function easeInCurve(t)
{
    sp = sinProgress(t);
    mix = smoothBeginEndMixFactor(t);
    return sp * mix + t * (1 - mix);
}
 
/**
 * Easing function that starts growing steadily, then ends slowly. The speed will be constant at the beginning of the curve.
 */
function easeOutCurve(t)
{
    sp = sinProgress(t);
    mix = smoothBeginEndMixFactor(1 - t);
    return sinProgress * mix + t * (1 - mix);
}
 
/**
 * Easing function where the value grows sinusoidally. Note that the calculated  end value will be 0 rather than 1.
 */
function easeSineCurve(t)
{
    return (Math.sin(((t * M_PI * 2)) - M_PI_2) + 1) / 2;
}
 
/**
 * Easing function where the value grows cosinusoidally. Note that the calculated start value will be 0.5 and the end value will be 0.5
 * contrary to the usual 0 to 1 easing curve.
 */
function easeCosineCurve(t)
{
    return (Math.cos(((t * M_PI * 2)) - M_PI_2) + 1) / 2;
}

//

 var valueForProgressPoint = function(a,b,p)
{
    //console.log(a.getName());
    var point = new Point(a.x + (b.x - a.x) * p, a.y + (b.y - a.y) * p);
    
    return point;
}
 var valueForProgressNumber = function(a,b,p)
 {
    return a + (b - a) * p;
 }
 
 var valueForProgressColor = function(a,b,p)
 {
    var color = new Color();
    
    color.red = a.red + (b.red - a.red) * p;
    color.green = a.green + (b.green - a.green) * p;
    color.blue = a.blue + (b.blue - a.blue) * p;
    color.alpha = a.alpha + (b.alpha - a.alpha) * p;
    return color;
 }

function KeyValue(){
    this.progress = 0;
    this.value = null;
}

function compareKeyValues(a,b){
    return a.progress - b.progress;
}

function Animation(){
    this.write = null;
    this.keyValues = [];
    this.duration = 1;
    this.loopCount = 1;
    this.loop = 0;
    this.progress = 0.0;
    this.running = false;
    this.startTime = 0;
    this.manager;
}

Animation.prototype.valueForProgress = function(a,b,p){
    if(typeof(a) === "number")
        return valueForProgressNumber(a,b,p);
    switch(a.getName())
    {
    case "Point": return valueForProgressPoint(a,b,p);
    case "Color": return valueForProgressColor(a,b,p);
    default: return valueForProgressNumber(a,b,p);
    }
}

function AnimationManager(){
    this.animations = [];
    this.toBeRemoved = [];
}

var timeAnimationManager = new AnimationManager();
var distAnimationManager = new AnimationManager();

Animation.prototype.manager = timeAnimationManager;

Animation.prototype.easingFunc = easeNone;
Animation.prototype.start = function(){
    this.keyValues.sort(compareKeyValues);
    
    if(this.keyValues.length < 2){
        console.log("Too few key values!");
        return;
    }
    if(this.keyValues[0].progress != 0 || this.keyValues[this.keyValues.length-1].progress != 1.0){
        console.log("No start or end point!");
        return;
    }
    
    this.manager.animations[this.manager.animations.length] = this;
    this.running = true;
    
    
    //console.log("Successfully Added Animation!");
};

Animation.prototype.stop = function(){
    if(this.running){
        this.running = false;
        this.startTime = 0;
        this.loop = 0;
        this.progress = 0;
        this.manager.animations.splice(this.manager.animations.indexOf(this),1);
    }
}

Animation.prototype.finish = function(){};

Animation.prototype.setKeyValue = function(progress, value)
{
    var kv = new KeyValue();
    kv.progress = progress;
    kv.value = value;
    this.keyValues[this.keyValues.length] = kv;
};

Animation.prototype.setStartValue = function(value)
{
    this.setKeyValue(0.0, value);
}

Animation.prototype.setEndValue = function(value)
{
    this.setKeyValue(1.0, value);
}

Animation.prototype.update = function(time){
    //console.log(time);
    
    if(this.startTime == 0.0){
        this.startTime = time;
        this.progress = 0.0;
    }
    else{
        this.progress = ((time - this.startTime) / this.duration);
        //this.startTime = time;
    }
    
    var easedProgress;
    if(this.progress >= this.loop + 1 && this.loopCount != 0)
        easedProgress = this.easingFunc(1.0)
    else
        easedProgress = this.easingFunc(this.progress % 1.0);
    if(this.progress >= this.loop + 1){// && (this.loop < this.loopCount)){
        //this.progress -= 1;
        this.loop++;
        //this.startTime = 0;
    }
        
    for(var i = 1; i < this.keyValues.length; i++){
        if(easedProgress <= this.keyValues[i].progress || easedProgress >= 1){
            var deltap = this.keyValues[i].progress - this.keyValues[i-1].progress
            var diffp = easedProgress - this.keyValues[i-1].progress;
            this.write(this.valueForProgress(this.keyValues[i-1].value, this.keyValues[i].value, diffp / deltap));
            return;
        }
    }
    /*
    for(var i = 0; i < this.keyValues.length - 1; i++){
        if(easedProgress <= this.keyValues[i].progress){
            //var deltav = this.keyValues[i+1].value - this.keyValues[i].value;
            var deltap = this.keyValues[i+1].progress - this.keyValues[i].progress;
            var diffp = this.keyValues[i].progress - easedProgress;
            //this.write(this.keyValues[i].value + diffp/deltap * deltav);
            this.write(this.valueForProgress(this.keyValues[i].value, this.keyValues[i+1].value, diffp / deltap));
            return;
        }
    }
    //var deltav = this.keyValues[this.keyValues.length - 1].value - this.keyValues[this.keyValues.length - 2].value;
    var deltap = this.keyValues[this.keyValues.length - 1].progress - this.keyValues[this.keyValues.length - 2].progress;
    var diffp = easedProgress - this.keyValues[this.keyValues.length - 2].progress;
    //this.write(this.keyValues[this.keyValues.length - 2].value + diffp/deltap * deltav);
    this.write(this.valueForProgress(this.keyValues[this.keyValues.length - 2].value, this.keyValues[this.keyValues.length - 1].value, diffp / deltap));*/
};

AnimationManager.prototype.animate = function(t){
    
    for(var i = 0; i < this.toBeRemoved.length; i++){
        //this.animations.splice(this.animations.indexOf(this.animations[i]),1);
        this.toBeRemoved[i].finish();
        this.toBeRemoved[i].stop();
        
    }
    
    this.toBeRemoved = [];
    
    for(var i = 0; i < this.animations.length; i++){
        var ani = this.animations[i];
        ani.update(t);
        if(ani.loop == ani.loopCount && ani.loopCount != 0.0){
            this.toBeRemoved[this.toBeRemoved.length] = ani;
            //ani.running = false;
        }
    }
    
    for(var i = 0; i < this.toBeRemoved.length; i++){
        //this.animations.splice(this.animations.indexOf(this.animations[i]),1);
        this.toBeRemoved[i].finish();
        this.toBeRemoved[i].stop();
        
    }
    
    this.toBeRemoved = [];
    
};


