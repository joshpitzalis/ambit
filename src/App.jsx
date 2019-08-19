import React from 'react';
import { Timeline, Icon, Checkbox, Avatar } from 'antd';
import PropTypes from 'prop-types';

import logo from './meetbox.png'

const objPropTypes = {};

const objDefaultProps = {};

const Objective = ({ type = 'task', level }) => {
  return (
    <div className={`center w5 mw6-ns ${level === '1' ? 'mv0' : 'mv4'} `}>
      <article className={` w5 mw6-ns br3 hidden `}>
        <div className={`flex br3 br--top black-60 mv0  ph3  justify-between items-center  `}>
          <div className='flex flex-column'
          >{type === 'task' &&

            <h1 class="f3 pt2">Ojective Title</h1>}
          </div>

       
          {level !== '1' && <Avatar icon="user" />}
        </div>
     
        <div class={`pa3   `}>
          {{
            'metric':
              <dl class="dib tc w-100">
                <dd class="f3 f2-ns b ">1,024</dd>
                <dd class="f6 f5-ns b ">Closed Issues</dd>
              </dl>,

            'task':
              <>
              <time className='db w-100 tl pb2 silver pt2'>12th Sep 2019</time>

                <p class="f6 f5-ns lh-copy measure">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.
    </p>
                <Checkbox onChange={() => { }}>Checkbox</Checkbox>
              </>
          }[type]}
        </div>

      </article>
      
    </div>


  );
}

Objective.propTypes = objPropTypes;
Objective.defaultProps = objDefaultProps;

function App() {
  return (
    <main>
      <nav class="db dt-l w-100 border-box pa3 ph4-l">

        <div class="db dtc-l v-mid w-100 w-75-l tc tl-l">
          <img src={logo} class="dib w2 h2 br-100 " alt="Site Name" />
        </div><a class="db dtc-l v-mid mid-gray link dim w-100 w-25-l tc tr-l mb2 mb0-l" href="#" title="Home">

          <Avatar icon="user" />
        </a>
      </nav>
      <article className='flex'>

        <section className='ma4 w5'>

          <Timeline mode="alternate" >
            <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
            <Timeline.Item color="green">Solve initial network problems 2015-09-01</Timeline.Item>
            <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
              laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
              beatae vitae dicta sunt explicabo.
    </Timeline.Item>
            <Timeline.Item color="red">Network problems being solved 2015-09-01</Timeline.Item>
            <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
            <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>
              Technical testing 2015-09-01
    </Timeline.Item>
          </Timeline>


        </section>
        <section className='flex-grow-1 ml3'>
          <section className='flex flex-wrap justify-around w-100 bb b--light-gray'>
        
              <div class="flex flex-column items-start lh-title w5 ml4">
              
                <time class="f6 fw4 ml0">19 Sep 2019</time>
                <p class="f5 fw4 ml0 b mv4 small-caps">Profit $</p>

                <p class="f2 f-subheadline-l fw6 ">1024</p>
                
              </div>
           
              
           
            <Objective type='task' level='1' />
            <div class="flex flex-column items-start lh-title w5 ml4">
              
                <time class="f6 fw4 ml0">19 Sep 2019</time>
                <p class="f5 fw4 ml0 b mv4 small-caps">Issues Closed</p>

                <p class="f2 f-subheadline-l fw6 ">14</p>
                
              </div>
            

          </section>
          <section className='flex flex-wrap mt5'>

            <List />
            <List />




          </section>
        </section>
      </article>
      {/* <Footer /> */}
    </main>
  );
}

export default App;






const xpropTypes = {};

const xdefaultProps = {};

const List = (props) => {
  return (
    < div className='flex flex-column pa3 ph4-l'>
      <div className='flex '>
        <Avatar icon="user" />
        <h1 class="f4 bold pl3">Something List</h1>

      </div>
      <ul class="list pl0 ml0 center  ba b--light-gray br3">
        <li class="ph3 pv2 bb b--light-gray">

          <Objective />
        </li>
        <li class="ph3 pv2 bb b--light-gray">  <Objective type='metric' /></li>
        <li class="ph3 pv2 bb b--light-gray"><Objective /></li>
        <li class="ph3 pv2 bb b--light-gray"><Objective /></li>
       
        <li class="ph3 pv2"><Objective /></li>
      </ul>
    </div>
  );
}

App.propTypes = xpropTypes;
App.defaultProps = xdefaultProps;

const propTypes = {};

const defaultProps = {};

const Footer = (props) => {
  return (
    <footer class="pa4 pa5-l black-70 bt b--black-10">
      <div class="mb4-l cf">
        <h1 class="fl w-100 pv0 f6 fw6 ttu tracked mb4">Studios</h1>
        <article class="fl w-50 dib-ns w-auto-ns mr4-m mr5-l mb4 pr2 pr0-ns">
          <h4 class="f5 f4-l fw6">SF</h4>
          <span class="f7 f6-l db black-70">837 Larkin St.</span>
          <span class="f7 f6-l black-70">San Francisco, CA 94109 </span>
          <a class="f6 db fw6 pv3 black-70 link dim" title="Call SF" href="tel:+12075555555">
            +1 207-555-5555
      </a>
        </article>
        <article class="fl w-50 dib-ns w-auto-ns mr4-m mr5-l mb4 pl2 pl0-ns">
          <h4 class="f5 f4-l fw6">LA</h4>
          <span class="f7 f6-l db black-70">
            1111 Manor Way
      </span>
          <span class="f7 f6-l di black-70">
            Los Angeles, CA 90048
      </span>
          <a href="tel:+13235555555" class="f6 db fw6 pv3 link dim black-70" title="Call the LA office.">
            +1 323-555-5555
      </a>
        </article>
        <article class="fl w-50 dib-ns w-auto-ns mr4-m mr5-l mb4 pr2 pr0-ns">
          <h4 class="f5 f4-l fw6">London</h4>
          <span class="f7 f6-l db black-70">11 Downey St.</span>
          <span class="f7 f6-l black-70">London, UK</span>
          <a href="tel:+5555555555" class="link dim f6 db fw6 pv3 black-70" title="Call the London office">+44 0 5555-5555</a>
        </article>
        <article class="fl w-50 dib-ns w-auto-ns mb4 pl2 pl0-ns">
          <h4 class="f5 f4-l fw6">Tokyo</h4>
          <span class="f7 f6-l db black-70">1982 Flangan Rd.</span>
          <span class="f7 f6-l">Shinjuku, Tokyo</span>
          <a href="tel:+444444444444" class="f6 db dim fw6 pv3 link black-70" title="Call Tokyo Office">
            +99 5555-5555
      </a>
        </article>
      </div>
      <section class="cf mb5">
        <div class="mb4 mb0-ns w-100 w-50-l fr">
          <a class="black-70 f3 f2-ns fw6 tl link dim dib pv3 mt2 mb4 mb0-l" href="mailto:hello@impossible.com" >
            hello@yourcompany.com
      </a>
        </div>
        <div class="mb4 mb0-ns fl w-100 w-50-l" >
          <p class="f4 fw6 mb2 f6 mt0">
            Sign up for our newsletter.
      </p>
          <input placeholder="Email Address" class="mw-100 w-100 w5-ns f5 input-reset ba b--black-20 pv3 ph4 border-box" />
          <input type="submit" class="input-reset w-100 w-auto-ns bg-black-80 white f5 pv2 pv3-ns ph4 ba b--black-80 bg-hover-mid-gray" />
        </div>
      </section>
      <div class="dt dt--fixed w-100" >
        <div class="dn dtc-ns v-mid">
          <p class="f7 black-70 dib pr3 mb3">
            Copyright © Your Company 2048
      </p>
        </div>
        <div class="db dtc-ns black-70 tc tr-ns v-mid">
          <a href="https://www.facebook.com/" class="link dim dib mr3 black-70" title="Impossible Labs on Facebook">
            <svg class="db w2 h2" data-icon="facebook" viewBox="0 0 32 32" fill="currentColor">
              <title >facebook icon</title>
              <path d="M8 12 L13 12 L13 8 C13 2 17 1 24 2 L24 7 C20 7 19 7 19 10 L19 12 L24 12 L23 18 L19 18 L19 30 L13 30 L13 18 L8 18 z"
              ></path>
            </svg>
          </a>
          <a href="https://twitter.com/" class="link dim dib mr3 black-70">
            <svg class="db w2 h2" data-icon="twitter" viewBox="0 0 32 32"
              fill="currentColor" >
              <title >twitter icon</title>
              <path d="M2 4 C6 8 10 12 15 11 A6 6 0 0 1 22 4 A6 6 0 0 1 26 6 A8 8 0 0 0 31 4 A8 8 0 0 1 28 8 A8 8 0 0 0 32 7 A8 8 0 0 1 28 11 A18 18 0 0 1 10 30 A18 18 0 0 1 0 27 A12 12 0 0 0 8 24 A8 8 0 0 1 3 20 A8 8 0 0 0 6 19.5 A8 8 0 0 1 0 12 A8 8 0 0 0 3 13 A8 8 0 0 1 2 4"
              ></path>
            </svg>
          </a>
          <a href="https://medium.com/" class="link dim dib mr3 black-70" title="Impossible Labs on Medium">
            <svg class="db w2 h2" x="0px" y="0px" viewBox="0 0 290 248.6"
              fill="currentColor" >
              <g >
                <path fill="currentColor" class="st0" d="M287.8,46.3L196,0.3c-0.4-0.2-0.9-0.3-1.3-0.3c0,0-0.1,0-0.1,0c-1.1,0-2.2,0.6-2.8,1.5l-56.6,92l63.2,102.7 l90.4-146.9C289.4,48.3,289,46.8,287.8,46.3z"
                ></path>
                <polygon fill="currentColor" points="105.2,61.2 105.2,160.3 193.3,204.4 	"
                ></polygon>
                <path fill="currentColor" d="M201,208.2l80.9,40.5c4.4,2.2,8,0,8-5v-180L201,208.2z"
                ></path>
                <path fill="currentColor" d="M95.5,46.7L10.7,4.3L5.4,1.7C4.6,1.3,3.8,1.1,3.2,1.1c-0.9,0-1.7,0.4-2.3,1.1C0.3,2.8,0,3.8,0,5v193.4 c0,3.3,2.4,7.2,5.4,8.7l83.3,41.6c1.2,0.6,2.3,0.9,3.3,0.9c2.8,0,4.8-2.2,4.8-5.8V48.7C96.7,47.8,96.2,47.1,95.5,46.7z"
                ></path>
              </g>
            </svg>
          </a>
          <a href="https://www.linkedin.com/company/" class="link dim dib black-70">
            <svg class="db w2 h2" x="0px" y="0px" viewBox="0 0 48 48" >
              <linearGradient gradientUnits="userSpaceOnUse" x1="23.9995"
                y1="0" x2="23.9995" y2="48.0005" >
                <stop offset="0" ></stop>
                <stop offset="1" ></stop>
              </linearGradient>
              <path fill="currentColor" d="M48,42c0,3.313-2.687,6-6,6H6c-3.313,0-6-2.687-6-6V6 c0-3.313,2.687-6,6-6h36c3.313,0,6,2.687,6,6V42z"
              ></path>
              <g >
                <g >
                  <path fill="#FFFFFF" d="M15.731,11.633c-1.608,0-2.658,1.083-2.625,2.527c-0.033,1.378,1.018,2.494,2.593,2.494 c1.641,0,2.691-1.116,2.691-2.494C18.357,12.716,17.339,11.633,15.731,11.633z M13.237,35.557h4.988V18.508h-4.988V35.557z M31.712,18.748c-1.595,0-3.222-0.329-4.956,2.36h-0.099l-0.087-2.599h-4.417c0.065,1.411,0.074,3.518,0.074,5.52v11.529h4.988 v-9.854c0-0.46,0.065-0.919,0.196-1.248c0.328-0.919,1.149-1.871,2.527-1.871c1.805,0,2.527,1.411,2.527,3.479v9.494h4.988V25.439 C37.455,20.713,34.993,18.748,31.712,18.748z"
                  ></path>
                </g>
              </g>
            </svg>
          </a>
        </div>
      </div>
      <div class="db dn-ns">
        <p class="f7 black-70 mt4 tc">
          Copyright © Your Company 2038
    </p>
      </div>
    </footer>
  );
}

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;