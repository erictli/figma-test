import React, { PureComponent } from 'react';
import { Ccomponentheader } from './components/Ccomponentheader';
import { Cbuttonprimary } from './components/Cbuttonprimary';
import { Cbuttonsecondary } from './components/Cbuttonsecondary';
import { Cmembernavigation } from './components/Cmembernavigation';
import { Cformfieldactive } from './components/Cformfieldactive';
import { Cformfield } from './components/Cformfield';
import { Cformfieldfilled } from './components/Cformfieldfilled';
import { CDesign } from './components/CDesign';
import { CClock } from './components/CClock';

export class MasterDesign extends PureComponent {
  render() {
    return <div><div className="header"><div className="logo"></div><p>Design System</p></div><div className="master" style={{backgroundColor: "rgba(242, 243, 244, 1)"}}>
      <CDesign {...this.props} nodeId="10:11" />
    </div></div>
  }
}

export class MasterClock extends PureComponent {
  render() {
    return <div><div className="header"><div className="logo"></div><p>Design System</p></div><div className="master" style={{backgroundColor: "rgba(255, 255, 255, 1)"}}>
      <CClock {...this.props} nodeId="13:13" />
    </div></div>
  }
}

export function getComponentFromId(id) {
  if (id === "590:3") return Ccomponentheader590D3;
  if (id === "590:15") return Ccomponentheader590D15;
  if (id === "590:10") return Cbuttonprimary590D10;
  if (id === "590:19") return Cbuttonsecondary590D19;
  if (id === "590:21") return Ccomponentheader590D21;
  if (id === "590:23") return Ccomponentheader590D23;
  if (id === "590:20") return Cbuttonprimary590D20;
  if (id === "590:22") return Cbuttonsecondary590D22;
  if (id === "594:0") return Ccomponentheader594D0;
  if (id === "594:5") return Cmembernavigation594D5;
  if (id === "596:5") return Ccomponentheader596D5;
  if (id === "596:21") return Ccomponentheader596D21;
  if (id === "596:9") return Ccomponentheader596D9;
  if (id === "596:15") return Cformfieldactive596D15;
  if (id === "596:8") return Cformfield596D8;
  if (id === "596:29") return Cformfieldfilled596D29;
  if (id === "10:11") return CDesign10D11;
  if (id === "13:13") return CClock13D13;
  return null;
}

class Ccomponentheader590D3 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{}} className="outerDiv centerer">
          <div
            id="590:2"
            style={{"marginLeft":0,"marginRight":34,"flexGrow":1,"marginTop":0,"marginBottom":-3,"color":"rgba(134, 145, 160, 1)","fontSize":12,"fontWeight":400,"fontFamily":"Nunito Sans","textAlign":"LEFT","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">Button Primary</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Ccomponentheader590D15 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{}} className="outerDiv centerer">
          <div
            id="I590:15;590:2"
            style={{"marginLeft":0,"marginRight":19,"flexGrow":1,"marginTop":0,"marginBottom":-3,"color":"rgba(134, 145, 160, 1)","fontSize":12,"fontWeight":400,"fontFamily":"Nunito Sans","textAlign":"LEFT","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">Button Secondary</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Cbuttonprimary590D10 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{}} className="outerDiv centerer">
          <div
            id="590:0"
            style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(81, 86, 234, 1)","borderRadius":"3px 3px 3px 3px"}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":1}} className="outerDiv centerer">
          <div
            id="590:1"
            style={{"marginLeft":50,"marginRight":50,"flexGrow":1,"marginTop":14,"marginBottom":12,"color":"rgba(255, 255, 255, 1)","fontSize":16,"fontWeight":400,"fontFamily":"Nunito Sans","textAlign":"CENTER","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              {this.props.text && this.props.text.split("\n").map((line, idx) => <div key={idx}>{line}</div>)}
              {!this.props.text && (<div>
                <span style={{}} key="end">Bake Bread</span>
              </div>)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Cbuttonsecondary590D19 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{}} className="outerDiv centerer">
          <div
            id="590:14"
            style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{}} className="outerDiv centerer">
                <div
                  id="I590:14;590:0"
                  style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"border":"2px solid rgba(81, 86, 234, 1)","borderRadius":"3px 3px 3px 3px"}}
                  className="innerDiv"
                >
                  <div>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":1}} className="outerDiv centerer">
                <div
                  id="I590:14;590:1"
                  style={{"marginLeft":50,"marginRight":50,"flexGrow":1,"marginTop":14,"marginBottom":12,"color":"rgba(81, 86, 234, 1)","fontSize":16,"fontWeight":400,"fontFamily":"Nunito Sans","textAlign":"CENTER","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
                  className="innerDiv"
                >
                  <div>
                    <span style={{}} key="end">Bake Bread</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Ccomponentheader590D21 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{}} className="outerDiv centerer">
          <div
            id="I590:21;590:2"
            style={{"marginLeft":0,"marginRight":-10,"flexGrow":1,"marginTop":0,"marginBottom":-3,"color":"rgba(134, 145, 160, 1)","fontSize":12,"fontWeight":400,"fontFamily":"Nunito Sans","textAlign":"LEFT","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">Button Primary - Hover</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Ccomponentheader590D23 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{}} className="outerDiv centerer">
          <div
            id="I590:23;590:2"
            style={{"marginLeft":0,"marginRight":-25,"flexGrow":1,"marginTop":0,"marginBottom":-3,"color":"rgba(134, 145, 160, 1)","fontSize":12,"fontWeight":400,"fontFamily":"Nunito Sans","textAlign":"LEFT","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">Button Secondary - Hover</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Cbuttonprimary590D20 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{}} className="outerDiv centerer">
          <div
            id="I590:20;590:0"
            style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(40, 44, 174, 1)","borderRadius":"3px 3px 3px 3px"}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":1}} className="outerDiv centerer">
          <div
            id="I590:20;590:1"
            style={{"marginLeft":50,"marginRight":50,"flexGrow":1,"marginTop":14,"marginBottom":12,"color":"rgba(255, 255, 255, 1)","fontSize":16,"fontWeight":400,"fontFamily":"Nunito Sans","textAlign":"CENTER","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              {this.props.text && this.props.text.split("\n").map((line, idx) => <div key={idx}>{line}</div>)}
              {!this.props.text && (<div>
                <span style={{}} key="end">Bake Bread</span>
              </div>)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Cbuttonsecondary590D22 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{}} className="outerDiv centerer">
          <div
            id="I590:22;590:14"
            style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{}} className="outerDiv centerer">
                <div
                  id="I590:22;590:14;590:0"
                  style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"border":"2px solid rgba(40, 44, 174, 1)","borderRadius":"3px 3px 3px 3px"}}
                  className="innerDiv"
                >
                  <div>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":1}} className="outerDiv centerer">
                <div
                  id="I590:22;590:14;590:1"
                  style={{"marginLeft":50,"marginRight":50,"flexGrow":1,"marginTop":14,"marginBottom":12,"color":"rgba(40, 44, 174, 1)","fontSize":16,"fontWeight":400,"fontFamily":"Nunito Sans","textAlign":"CENTER","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
                  className="innerDiv"
                >
                  <div>
                    <span style={{}} key="end">Bake Bread</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Ccomponentheader594D0 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{}} className="outerDiv centerer">
          <div
            id="I594:0;590:2"
            style={{"marginLeft":0,"marginRight":10,"flexGrow":1,"marginTop":0,"marginBottom":-3,"color":"rgba(134, 145, 160, 1)","fontSize":12,"fontWeight":400,"fontFamily":"Nunito Sans","textAlign":"LEFT","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">Member Navigation</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Cmembernavigation594D5 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{}} className="outerDiv centerer">
          <div
            id="594:9"
            style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(0, 0, 0, 1)"}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":1,"alignItems":"center"}} className="outerDiv centerer">
          <div
            id="594:15"
            style={{"marginLeft":24.000045776367188,"width":87.10525512695312,"minWidth":87.10525512695312,"height":24,"marginTop":0}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="87" height="24" viewBox="0 0 87 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.8923 11.9512C7.41628 12.3114 6.60767 12.4912 5.46547 12.4912H2.61043V8.3344H5.50629C6.55319 8.3344 7.33158 8.49393 7.84144 8.81254C8.35119 9.13159 8.60606 9.65099 8.60606 10.3715C8.60606 11.0644 8.368 11.5909 7.8923 11.9512ZM2.61043 2.20311H5.64907C6.62797 2.20311 7.33463 2.35918 7.77005 2.67078C8.20481 2.9826 8.42258 3.46407 8.42258 4.1152C8.42258 4.82194 8.18789 5.335 7.71897 5.65328C7.24971 5.97222 6.56684 6.13141 5.66948 6.13141H2.61043V2.20311ZM8.99345 7.23285C9.67327 6.95596 10.1866 6.54046 10.5333 5.98612C10.8801 5.4319 11.0532 4.71125 11.0532 3.8244C11.0532 2.59113 10.6181 1.64577 9.74815 0.987527C8.87786 0.32962 7.48439 -1.42691e-07 5.56742 -1.42691e-07H-3.4661e-08V14.8192H5.81215C7.6884 14.8192 9.07838 14.4521 9.98261 13.7178C10.8866 12.9832 11.3389 11.9441 11.3389 10.6C11.3389 9.68548 11.1381 8.96161 10.7372 8.4283C10.3361 7.89498 9.7548 7.49639 8.99345 7.23285Z" transform="translate(28.1339 4.58477) scale(0.998792)" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.80349 0.716866C3.17105 1.195 2.73934 1.92599 2.50826 2.90974L2.16158 0.103903H-1.04208e-06V12.0547H2.63073V6.52611C2.63073 5.59799 2.72242 4.8601 2.90602 4.31266C3.08962 3.76544 3.42592 3.37397 3.91548 3.13824C4.16031 3.01364 4.45907 2.9202 4.81273 2.85756C5.16606 2.79527 5.57419 2.76412 6.03635 2.76412H7.19884V0H6.40343C5.30207 0 4.4356 0.239066 3.80349 0.716866Z" transform="translate(41.3331 7.34596) scale(0.998792)" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.67167 5.13387C2.82088 4.19184 3.18152 3.46074 3.7524 2.94133C4.32339 2.42148 5.07088 2.16183 5.99564 2.16183C6.93382 2.16183 7.65085 2.4286 8.14729 2.96191C8.64329 3.49567 8.9391 4.21921 9.03439 5.13387H2.67167ZM10.3598 1.8499C9.89769 1.2821 9.30269 0.831338 8.57561 0.498825C7.84821 0.166312 6.9813 2.09374e-07 5.97533 2.09374e-07C4.7516 2.09374e-07 3.69444 0.256755 2.80429 0.76904C1.91348 1.2821 1.22362 2.00264 0.734063 2.93076C0.489339 3.40178 0.305962 3.91106 0.18349 4.45828C0.0611281 5.00583 -9.74517e-07 5.5981 -9.74517e-07 6.23531V6.52655C-9.74517e-07 8.36933 0.48934 9.83455 1.46846 10.9221C2.44713 12.0101 3.92225 12.5539 5.89369 12.5539C7.42993 12.5539 8.67047 12.2143 9.61553 11.5354C10.5605 10.8568 11.2029 9.91398 11.5426 8.70863H8.6673C8.46329 9.22159 8.14379 9.61651 7.7087 9.8934C7.27351 10.1707 6.70241 10.3092 5.99564 10.3092C5.03016 10.3092 4.25877 10.0461 3.68101 9.51928C3.10304 8.99309 2.75986 8.24474 2.65114 7.27457H11.7058V6.0067C11.7058 5.24489 11.5969 4.50366 11.3797 3.78268C11.162 3.06248 10.8219 2.41814 10.3598 1.8499Z" transform="translate(49.3787 7.15887) scale(0.998792)" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.52441 6.83804C8.52441 7.40662 8.37138 7.97074 8.06564 8.5322C7.75979 9.09332 7.32121 9.5541 6.75022 9.91398C6.46467 10.0946 6.15544 10.2297 5.82219 10.3194C5.48905 10.4099 5.13222 10.4545 4.75182 10.4545C4.1399 10.4545 3.68102 10.3299 3.37506 10.0803C3.06932 9.8311 2.91617 9.45687 2.91617 8.95816C2.91617 8.69506 2.97391 8.45933 3.08962 8.25141C3.20488 8.0435 3.37833 7.86383 3.60963 7.71109C3.88143 7.53132 4.19742 7.38893 4.55785 7.28514C4.91795 7.18112 5.45194 7.07377 6.15882 6.96308C6.6891 6.87976 7.15453 6.77585 7.55578 6.65115C7.95671 6.52655 8.2798 6.37415 8.52441 6.19371V6.83804ZM8.93232 0.51985C8.55148 0.339744 8.10963 0.207918 7.60686 0.12504C7.10355 0.0417173 6.53257 2.09374e-07 5.89369 2.09374e-07C4.22155 2.09374e-07 2.90929 0.412499 1.9579 1.23661C1.00597 2.06127 0.482355 3.15259 0.3875 4.51045H3.1407C3.18142 3.74864 3.43302 3.15937 3.89518 2.74354C4.35712 2.32804 5.07099 2.12012 6.03646 2.12012C6.94725 2.12012 7.58635 2.26574 7.95354 2.55664C8.32063 2.84744 8.504 3.2427 8.504 3.74141C8.504 4.22633 8.27631 4.56941 7.82103 4.7701C7.36531 4.97134 6.61421 5.14088 5.56742 5.27938C4.83336 5.39051 4.22809 5.49453 3.75229 5.59098C3.27649 5.68809 2.86858 5.79878 2.52878 5.92382C2.3656 5.979 2.19902 6.04842 2.02907 6.13141C1.85901 6.21473 1.69266 6.31196 1.52947 6.42265C1.05356 6.72735 0.679595 7.12594 0.40791 7.61754C0.135788 8.10958 -2.00046e-07 8.68794 -2.00046e-07 9.35308C-2.00046e-07 10.3231 0.322768 11.0989 0.968635 11.681C1.61428 12.2627 2.5695 12.5539 3.83383 12.5539C5.04392 12.5539 6.04672 12.2972 6.84202 11.7849C7.63743 11.2722 8.23177 10.6278 8.62647 9.85179L8.91202 12.242H11.0737V4.17794C11.0737 3.31879 10.907 2.57722 10.574 1.95392C10.2408 1.3305 9.69368 0.852363 8.93232 0.51985Z" transform="translate(62.4557 7.15887) scale(0.998792)" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.01387 10.0593C9.01387 11.2375 8.72493 12.1726 8.14739 12.8654C7.5692 13.5583 6.78405 13.9046 5.79184 13.9046C4.9078 13.9046 4.18073 13.5823 3.60974 12.9379C3.03853 12.2939 2.7532 11.3346 2.7532 10.0593V9.83077C2.7532 8.6391 3.02489 7.71065 3.5688 7.04562C4.1125 6.3806 4.8875 6.04809 5.89379 6.04809C6.85894 6.04809 7.62018 6.39439 8.17785 7.08723C8.7353 7.7804 9.01387 8.70185 9.01387 9.85168V10.0593ZM8.95296 8.1721e-09V6.11038C8.61272 5.37627 8.11978 4.80469 7.47435 4.39564C6.82837 3.98726 6.02281 3.78268 5.05767 3.78268C4.06502 3.78268 3.18807 4.01129 2.42705 4.4684C1.66515 4.92595 1.07375 5.5981 0.652521 6.4845C0.434977 6.92815 0.271683 7.42697 0.163184 7.98087C0.0540291 8.5352 -2.94105e-07 9.13782 -2.94105e-07 9.78905V10.0803C-2.94105e-07 12.0893 0.455285 13.6205 1.3664 14.6736C2.27707 15.7268 3.48039 16.2532 4.97591 16.2532C6.02281 16.2532 6.88284 15.997 7.55578 15.4843C8.22883 14.9716 8.72144 14.3134 9.03438 13.5094L9.31982 16.0037H11.5428V8.1721e-09H8.95296Z" transform="translate(75.4712 3.40178) scale(0.998792)" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.33452 12.5034C6.92618 12.3945 4.16326 11.6286 4.16326 8.90977C4.16326 8.90977 13.3306 11.4171 13.6486 11.5001C13.9665 11.5831 16.8053 12.3903 16.8053 15.0898C16.8053 15.0898 7.74276 12.6126 7.33452 12.5034ZM10.488 -8.35475e-10C7.32033 -8.35475e-10 5.05964 0.965834 5.05964 1.94268L5.05942 1.94224C5.05942 2.32715 5.31058 2.52271 5.72068 2.63441C6.60876 2.87625 13.1996 4.65852 13.6344 4.79557C14.1578 4.96044 16.8003 5.6595 16.8057 8.38157L16.7982 8.37445C16.7982 8.37445 4.04788 4.84853 3.15107 4.64762C2.53457 4.50945 2.0604 4.6336 1.73883 4.96122C0.957612 5.75751 0 9.42294 0 12.0324C0 18.9798 4.16326 24 10.4809 24C13.6486 24 15.9093 23.0342 15.9093 22.0574C15.9093 21.6725 15.6583 21.4768 15.2481 21.3651C14.36 21.1235 7.77551 19.319 7.33452 19.2042C6.89354 19.0892 4.1626 18.339 4.1626 15.6103L17.8178 19.3524C18.4344 19.4906 18.9085 19.3665 19.23 19.0388C20.0113 18.2425 20.9689 14.5771 20.9689 11.9676C20.9689 5.02029 16.8056 -8.35475e-10 10.488 -8.35475e-10Z" transform="scale(0.998792)" fill="white"/>
</svg>
`}} />
          </div>
        </div>
        <div style={{"zIndex":7,"justifyContent":"flex-end","alignItems":"center"}} className="outerDiv centerer">
          <div
            id="594:10"
            style={{"marginRight":299,"width":56,"minWidth":56,"height":18,"marginTop":0.666656494140625,"color":"rgba(255, 255, 255, 1)","fontSize":13,"fontWeight":400,"fontFamily":"Nunito Sans","textAlign":"CENTER","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              {this.props.text && this.props.text.split("\n").map((line, idx) => <div key={idx}>{line}</div>)}
              {!this.props.text && (<div>
                <span style={{}} key="end">My Loans</span>
              </div>)}
            </div>
          </div>
        </div>
        <div style={{"zIndex":8,"justifyContent":"flex-end","alignItems":"center"}} className="outerDiv centerer">
          <div
            id="594:22"
            style={{"marginRight":197,"width":70,"minWidth":70,"height":18,"marginTop":0,"color":"rgba(255, 255, 255, 1)","fontSize":13,"fontWeight":400,"fontFamily":"Nunito Sans","textAlign":"CENTER","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              {this.props.text && this.props.text.split("\n").map((line, idx) => <div key={idx}>{line}</div>)}
              {!this.props.text && (<div>
                <span style={{}} key="end">My Account</span>
              </div>)}
            </div>
          </div>
        </div>
        <div style={{"zIndex":9,"justifyContent":"flex-end","alignItems":"center"}} className="outerDiv centerer">
          <div
            id="594:23"
            style={{"marginRight":117,"width":48,"minWidth":48,"height":18,"marginTop":0.666656494140625,"color":"rgba(255, 255, 255, 1)","fontSize":13,"fontWeight":400,"fontFamily":"Nunito Sans","textAlign":"CENTER","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              {this.props.text && this.props.text.split("\n").map((line, idx) => <div key={idx}>{line}</div>)}
              {!this.props.text && (<div>
                <span style={{}} key="end">Support</span>
              </div>)}
            </div>
          </div>
        </div>
        <div style={{"zIndex":10,"justifyContent":"flex-end","alignItems":"center"}} className="outerDiv centerer">
          <div
            id="594:24"
            style={{"marginRight":33,"width":52,"minWidth":52,"height":18,"marginTop":0.666656494140625,"color":"rgba(255, 255, 255, 1)","fontSize":13,"fontWeight":400,"fontFamily":"Nunito Sans","textAlign":"CENTER","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              {this.props.text && this.props.text.split("\n").map((line, idx) => <div key={idx}>{line}</div>)}
              {!this.props.text && (<div>
                <span style={{}} key="end">Sign Out</span>
              </div>)}
            </div>
          </div>
        </div>
        <div style={{"zIndex":1}} className="outerDiv maxer">
          <div
            id="594:5"
            style={{"backgroundColor":null,"width":"100%","pointerEvents":"none"}}
            className="innerDiv"
          >
            <div style={{"zIndex":6,"justifyContent":"flex-end"}} className="outerDiv">
              <div
                id="595:24"
                style={{"marginRight":196,"width":70,"minWidth":70,"height":null,"marginTop":52,"marginBottom":0,"minHeight":4,"backgroundColor":"rgba(255, 255, 255, 1)"}}
                className="innerDiv"
              >
                <div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Ccomponentheader596D5 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{}} className="outerDiv centerer">
          <div
            id="I596:5;590:2"
            style={{"marginLeft":0,"marginRight":59,"flexGrow":1,"marginTop":0,"marginBottom":-3,"color":"rgba(134, 145, 160, 1)","fontSize":12,"fontWeight":400,"fontFamily":"Nunito Sans","textAlign":"LEFT","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">Form Field</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Ccomponentheader596D21 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{}} className="outerDiv centerer">
          <div
            id="I596:21;590:2"
            style={{"marginLeft":0,"marginRight":20,"flexGrow":1,"marginTop":0,"marginBottom":-3,"color":"rgba(134, 145, 160, 1)","fontSize":12,"fontWeight":400,"fontFamily":"Nunito Sans","textAlign":"LEFT","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">Form Field - Filled</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Ccomponentheader596D9 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{}} className="outerDiv centerer">
          <div
            id="I596:9;590:2"
            style={{"marginLeft":0,"marginRight":14,"flexGrow":1,"marginTop":0,"marginBottom":-3,"color":"rgba(134, 145, 160, 1)","fontSize":12,"fontWeight":400,"fontFamily":"Nunito Sans","textAlign":"LEFT","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">Form Field - Active</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Cformfieldactive596D15 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{}} className="outerDiv centerer">
          <div
            id="596:17"
            style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(255, 255, 255, 1)","boxShadow":"0px 0px 2px rgba(81, 86, 234, 0.5019607843137255)","border":"1px solid rgba(81, 86, 234, 1)","borderRadius":"3px 3px 3px 3px"}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":1,"alignItems":"center"}} className="outerDiv centerer">
          <div
            id="596:19"
            style={{"marginLeft":13,"width":88,"minWidth":88,"height":20,"marginTop":-16,"color":"rgba(134, 145, 160, 1)","fontSize":10,"fontWeight":400,"fontFamily":"Nunito Sans","textAlign":"LEFT","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">Bank Account</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":2,"alignItems":"center"}} className="outerDiv centerer">
          <div
            id="596:18"
            style={{"marginLeft":13,"width":88,"minWidth":88,"height":20,"marginTop":18,"color":"rgba(15, 35, 63, 1)","fontSize":14,"fontWeight":400,"fontFamily":"Nunito Sans","textAlign":"LEFT","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">Chase Bank</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Cformfield596D8 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{}} className="outerDiv centerer">
          <div
            id="596:3"
            style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(255, 255, 255, 1)","border":"1px solid rgba(207, 211, 216, 1)","borderRadius":"3px 3px 3px 3px"}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":1}} className="outerDiv centerer">
          <div
            id="596:4"
            style={{"marginLeft":13,"marginRight":219,"flexGrow":1,"marginTop":16,"marginBottom":12,"color":"rgba(134, 145, 160, 1)","fontSize":14,"fontWeight":400,"fontFamily":"Nunito Sans","textAlign":"LEFT","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">Bank Account</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Cformfieldfilled596D29 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{}} className="outerDiv centerer">
          <div
            id="596:44"
            style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(255, 255, 255, 1)","border":"1px solid rgba(207, 211, 216, 1)","borderRadius":"3px 3px 3px 3px"}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":1,"alignItems":"center"}} className="outerDiv centerer">
          <div
            id="596:46"
            style={{"marginLeft":13,"width":88,"minWidth":88,"height":20,"marginTop":-16,"color":"rgba(134, 145, 160, 1)","fontSize":10,"fontWeight":400,"fontFamily":"Nunito Sans","textAlign":"LEFT","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">Bank Account</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":2,"alignItems":"center"}} className="outerDiv centerer">
          <div
            id="596:47"
            style={{"marginLeft":13,"width":88,"minWidth":88,"height":20,"marginTop":18,"color":"rgba(15, 35, 63, 1)","fontSize":14,"fontWeight":400,"fontFamily":"Nunito Sans","textAlign":"LEFT","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">Chase Bank</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class CDesign10D11 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{"zIndex":2}} className="outerDiv">
          <div
            id="590:3"
            style={{"marginLeft":40,"width":116,"minWidth":116,"height":null,"marginTop":120,"marginBottom":1146,"minHeight":14,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <Ccomponentheader {...this.props} nodeId="590:3" />
          </div>
        </div>
        <div style={{"zIndex":4}} className="outerDiv">
          <div
            id="590:15"
            style={{"marginLeft":253,"width":116,"minWidth":116,"height":null,"marginTop":-1160,"marginBottom":1146,"minHeight":14,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <Ccomponentheader {...this.props} nodeId="590:15" />
          </div>
        </div>
        <div style={{}} className="outerDiv">
          <div
            id="590:10"
            style={{"marginLeft":40,"width":183,"minWidth":183,"height":null,"marginTop":-1136,"marginBottom":1088,"minHeight":48,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <Cbuttonprimary {...this.props} nodeId="590:10" />
          </div>
        </div>
        <div style={{"zIndex":3}} className="outerDiv">
          <div
            id="590:19"
            style={{"marginLeft":253,"width":183,"minWidth":183,"height":null,"marginTop":-1136,"marginBottom":1088,"minHeight":48,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <Cbuttonsecondary {...this.props} nodeId="590:19" />
          </div>
        </div>
        <div style={{"zIndex":6}} className="outerDiv">
          <div
            id="590:21"
            style={{"marginLeft":40,"width":116,"minWidth":116,"height":null,"marginTop":-1038,"marginBottom":1024,"minHeight":14,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <Ccomponentheader {...this.props} nodeId="590:21" />
          </div>
        </div>
        <div style={{"zIndex":10}} className="outerDiv">
          <div
            id="590:23"
            style={{"marginLeft":253,"width":116,"minWidth":116,"height":null,"marginTop":-1038,"marginBottom":1024,"minHeight":14,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <Ccomponentheader {...this.props} nodeId="590:23" />
          </div>
        </div>
        <div style={{"zIndex":5}} className="outerDiv">
          <div
            id="590:20"
            style={{"marginLeft":40,"width":183,"minWidth":183,"height":null,"marginTop":-1014,"marginBottom":966,"minHeight":48,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <Cbuttonprimary {...this.props} nodeId="590:20" />
          </div>
        </div>
        <div style={{"zIndex":9}} className="outerDiv">
          <div
            id="590:22"
            style={{"marginLeft":253,"width":183,"minWidth":183,"height":null,"marginTop":-1014,"marginBottom":966,"minHeight":48,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <Cbuttonsecondary {...this.props} nodeId="590:22" />
          </div>
        </div>
        <div style={{"zIndex":7}} className="outerDiv">
          <div
            id="594:0"
            style={{"marginLeft":40,"width":116,"minWidth":116,"height":null,"marginTop":-916,"marginBottom":902,"minHeight":14,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <Ccomponentheader {...this.props} nodeId="594:0" />
          </div>
        </div>
        <div style={{"zIndex":1}} className="outerDiv">
          <div
            id="594:5"
            style={{"marginLeft":40,"marginRight":30,"flexGrow":1,"height":null,"marginTop":-891,"marginBottom":835,"minHeight":56,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <Cmembernavigation {...this.props} nodeId="594:5" />
          </div>
        </div>
        <div style={{"zIndex":8}} className="outerDiv">
          <div
            id="596:5"
            style={{"marginLeft":40,"width":116,"minWidth":116,"height":null,"marginTop":-795,"marginBottom":781,"minHeight":14,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <Ccomponentheader {...this.props} nodeId="596:5" />
          </div>
        </div>
        <div style={{"zIndex":14}} className="outerDiv">
          <div
            id="596:21"
            style={{"marginLeft":740,"width":116,"minWidth":116,"height":null,"marginTop":-795,"marginBottom":781,"minHeight":14,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <Ccomponentheader {...this.props} nodeId="596:21" />
          </div>
        </div>
        <div style={{"zIndex":12}} className="outerDiv">
          <div
            id="596:9"
            style={{"marginLeft":390,"width":116,"minWidth":116,"height":null,"marginTop":-795,"marginBottom":781,"minHeight":14,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <Ccomponentheader {...this.props} nodeId="596:9" />
          </div>
        </div>
        <div style={{"zIndex":13}} className="outerDiv">
          <div
            id="596:15"
            style={{"marginLeft":390,"width":320,"minWidth":320,"height":null,"marginTop":-770,"marginBottom":722,"minHeight":48,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <Cformfieldactive {...this.props} nodeId="596:15" />
          </div>
        </div>
        <div style={{"zIndex":11}} className="outerDiv">
          <div
            id="596:8"
            style={{"marginLeft":40,"width":320,"minWidth":320,"height":null,"marginTop":-770,"marginBottom":722,"minHeight":48,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <Cformfield {...this.props} nodeId="596:8" />
          </div>
        </div>
        <div style={{"zIndex":15}} className="outerDiv">
          <div
            id="596:29"
            style={{"marginLeft":740,"width":320,"minWidth":320,"height":null,"marginTop":-770,"marginBottom":722,"minHeight":48,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <Cformfieldfilled {...this.props} nodeId="596:29" />
          </div>
        </div>
      </div>
    );
  }
}

class CClock13D13 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{"justifyContent":"center"}} className="outerDiv">
          <div
            id="I13:13;12:55"
            style={{"width":561.469482421875,"marginLeft":null,"height":null,"marginTop":0,"marginBottom":89.21797180175781,"minHeight":199.9019012451172,"backgroundColor":"rgba(15, 35, 63, 1)","borderRadius":"26.832469940185547px 26.832469940185547px 26.832469940185547px 26.832469940185547px"}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":1,"justifyContent":"center"}} className="outerDiv">
          <div
            id="I13:13;12:57"
            style={{"width":297.8404235839844,"marginLeft":-205.93922424316406,"height":null,"marginTop":-244.84629440307617,"marginBottom":133.4915428161621,"minHeight":111.35475158691406,"color":"rgba(255, 255, 255, 1)","fontSize":96.59689331054688,"fontWeight":700,"fontFamily":"Roboto","textAlign":"CENTER","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              {this.props.time && this.props.time.split("\n").map((line, idx) => <div key={idx}>{line}</div>)}
              {!this.props.time && (<div>
                <span style={{}} key="end">10:10</span>
              </div>)}
            </div>
          </div>
        </div>
        <div style={{"zIndex":2,"justifyContent":"center"}} className="outerDiv">
          <div
            id="I13:13;12:58"
            style={{"width":79.689208984375,"marginLeft":121.95039367675781,"height":null,"marginTop":-230.75922966003418,"marginBottom":164.0077724456787,"minHeight":66.75145721435547,"color":"rgba(255, 255, 255, 1)","fontSize":32.19896697998047,"fontWeight":700,"fontFamily":"Roboto","textAlign":"CENTER","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              {this.props.seconds && this.props.seconds.split("\n").map((line, idx) => <div key={idx}>{line}</div>)}
              {!this.props.seconds && (<div>
                <span style={{}} key="end">:10</span>
              </div>)}
            </div>
          </div>
        </div>
        <div style={{"zIndex":3,"justifyContent":"center"}} className="outerDiv">
          <div
            id="I13:13;12:59"
            style={{"width":64.45450592041016,"marginLeft":128.18163299560547,"height":null,"marginTop":-182.4607810974121,"marginBottom":132.10441970825195,"minHeight":50.356361389160156,"color":"rgba(255, 255, 255, 1)","fontSize":24.14922332763672,"fontWeight":700,"fontFamily":"Roboto","textAlign":"CENTER","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              {this.props.ampm && this.props.ampm.split("\n").map((line, idx) => <div key={idx}>{line}</div>)}
              {!this.props.ampm && (<div>
                <span style={{}} key="end">PM</span>
              </div>)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

