var CompositeDisposable = require('atom').CompositeDisposable;
var child_process = require('child_process');
window.$ = require('jquery');
var atomSpaceView = require('atom-space-pen-views');

function wrappedFunScript() { 
var Yeoman__deactivate$, Yeoman__consumeYeomanEnvironment$, Yeoman__activate$, Yeoman___ctor$, YeomanHandler__activate$;
YeomanHandler__activate$ = (function(gen)
{
    var ignored0 = (((window.atom).commands).add("atom-workspace", "F#:New-project", (function(_arg1)
    {
      return gen.run("fsharp");
    })));
});
Yeoman___ctor$ = (function(unitVar0)
{
    {};
});
Yeoman__activate$ = (function(x,state)
{
    ;
});
Yeoman__consumeYeomanEnvironment$ = (function(x,gen)
{
    return YeomanHandler__activate$(gen);
});
Yeoman__deactivate$ = (function(x,unitVar1)
{
    ;
});
return [(function(ign)
{
    return (new Yeoman___ctor$());
}), (function(_this)
{
    return (function(p0)
    {
      return Yeoman__consumeYeomanEnvironment$(_this, p0);
    });
}), (function(_this)
{
    return (function(p0)
    {
      return Yeoman__activate$(_this, p0);
    });
}), (function(_this)
{
    return Yeoman__deactivate$(_this);
})]
 }
var _funcs = wrappedFunScript();
var _self = _funcs[0]();

module.exports = IonideYeoman = {
consumeYeomanEnvironment: function(p1) {
  return _funcs[1](_self)(p1); },
activate: function(p1) {
  return _funcs[2](_self)(p1); },
deactivate: function() {
  return _funcs[3](_self); }
};