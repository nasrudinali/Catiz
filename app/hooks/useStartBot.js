(function(_0x18193b,_0x4fa55b){const _0x172e6d=a12_0x5220,_0x3464cb=_0x18193b();while(!![]){try{const _0x243269=parseInt(_0x172e6d(0x90))/0x1*(-parseInt(_0x172e6d(0x88))/0x2)+parseInt(_0x172e6d(0x8c))/0x3+parseInt(_0x172e6d(0x89))/0x4*(parseInt(_0x172e6d(0x95))/0x5)+-parseInt(_0x172e6d(0x91))/0x6+-parseInt(_0x172e6d(0x8a))/0x7*(parseInt(_0x172e6d(0x85))/0x8)+parseInt(_0x172e6d(0x93))/0x9+-parseInt(_0x172e6d(0x8d))/0xa*(-parseInt(_0x172e6d(0x96))/0xb);if(_0x243269===_0x4fa55b)break;else _0x3464cb['push'](_0x3464cb['shift']());}catch(_0x2d4476){_0x3464cb['push'](_0x3464cb['shift']());}}}(a12_0x4b89,0xbb60f));function a12_0x5220(_0x131411,_0x31fd38){const _0x4b89c4=a12_0x4b89();return a12_0x5220=function(_0x5220f6,_0xb17611){_0x5220f6=_0x5220f6-0x84;let _0x106c74=_0x4b89c4[_0x5220f6];return _0x106c74;},a12_0x5220(_0x131411,_0x31fd38);}import{useFocusManager,useInput}from'ink';import{useEffect,useState}from'react';function a12_0x4b89(){const _0x5ee544=['upArrow','2113102velyrE','4PMUxaB','281540slobem','status','540873nxCJsN','1820WkdifH','downArrow','leftArrow','1UGmBov','7650636RgVnXw','connect','3711258LdVPFv','length','3855465xKjHoZ','158367iSmEIy','escape','back','rightArrow','176EOLzGv','exit'];a12_0x4b89=function(){return _0x5ee544;};return a12_0x4b89();}import{groupAccounts,runtimeServer}from'../utils/helper.js';const useStartBot=({accounts:_0x50362c,onChange:_0x2ef22a})=>{const _0x37137e=a12_0x5220,{focus:_0x5c87db}=useFocusManager(),[_0xf246fa,_0x3d530b]=useState(0x0),[_0x26bd3d,_0x3a7021]=useState([]),[_0xb693f2,_0x2db297]=useState({'status':_0x37137e(0x92),'baner':''}),_0x358541=_0x41383b=>{const _0x42d6e5=_0x37137e;if(_0x41383b>_0x26bd3d['length'])_0x3d530b(0x1);else _0x41383b<0x1?_0x3d530b(_0x26bd3d[_0x42d6e5(0x94)]):_0x3d530b(_0x41383b);};return useInput((_0x40075e,_0x45eb75)=>{const _0x100cb6=_0x37137e;if(_0x40075e)try{let _0x409108=parseInt(_0x40075e);_0x409108<=_0x26bd3d[_0x100cb6(0x94)]&&_0x3d530b(_0x409108);}catch(_0x3036d4){}_0x45eb75[_0x100cb6(0x87)]&&_0x358541(_0xf246fa-0x1),_0x45eb75[_0x100cb6(0x8e)]&&_0x358541(_0xf246fa+0x1),_0x45eb75[_0x100cb6(0x8f)]&&_0x358541(_0xf246fa-0x1),_0x45eb75[_0x100cb6(0x84)]&&_0x358541(_0xf246fa+0x1),_0x45eb75[_0x100cb6(0x97)]&&_0x2ef22a(_0x100cb6(0x98)),_0x40075e==='q'&&_0x2ef22a(_0x100cb6(0x86));}),useEffect(()=>{const _0x1804f1=async()=>{const _0x1578f4=a12_0x5220;if(_0xb693f2[_0x1578f4(0x8b)]==='reconnecting'){const _0x7ab1b4=await runtimeServer();_0x7ab1b4['status']===_0x1578f4(0x86)&&_0x2ef22a('exit'),_0x2db297(_0x7ab1b4);}},_0x270e5a=setInterval(_0x1804f1,0x5*0x3e8);return()=>{clearInterval(_0x270e5a);};},[_0xb693f2]),useEffect(()=>{const _0x22eebf=_0x37137e;if(_0x26bd3d[_0x22eebf(0x94)]<0x1){const _0x22edea=groupAccounts(_0x50362c,0x1);_0x3a7021(_0x22edea),_0x3d530b(0x1);}},[_0x26bd3d]),useEffect(()=>{_0x5c87db(_0xf246fa['toString']());},[_0xf246fa]),{'pageAccount':_0x26bd3d,'runtimeStatus':_0xb693f2,'focusOn':_0xf246fa};};export default useStartBot;