import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import second from '../images/second.png'
import fourth from '../images/fourth.png'
import third from '../images/third.jpg'
import first from '../images/first.png'

export default function MainComponent() {
  return (<>
        <hr class="w-9/12" />
    <main class="h-96 bg-black text-white"><div class="text-3xl text-center pt-36">Join Us!</div></main>
    {/* <!-- <main class="pl-9 ">
        <h1 class="text-slate-900 text-lg">Here at Ednam, we develop</h1>
        <h1 class="text-2xl">Practical Smart Garments, that Enrich Lives</h1>
        <hr class="w-9/12">
        <div>
        <img src="Shirt.jpg" class="pt-4" alt="Shirt Photo">
        <span>We are making India's first collection of apparel that delivers functions beyond traditional use – by interweaving electronic circuits within the fabric.</span>
        </div>
        <hr class="w-9/12">
        <h1 class="text-slate-900 text-lg">When done with enough sophistication and robustness , it will enable us to deliver </h1>
        <h1 class="text-2xl">Data based, Personalized Health Solutions</h1>
        <hr class="w-9/12">
        <img src="untitled-design-14.png" alt="multiple shirts">
        <span>Indian textile sector is renowned all over the world for its tradition and capability. By adding to it superior technology, we believe we can make India the global leader in smart garments.</span>
        <hr class="w-9/12">
        <br>
R
    </main> --> */}
    <main class="flex md:justify-center">
        <div class="mt-10 py-7 w-full md:w-2/4 mx-2 bg-green-700 text-white "><div class="flex">
            <div class="ml-10 w-9/12 h-14">
              Garment Production Engineer <br/>Location: IIT Roorkee
            </div>
            <div class="justify-end w-auto">
              <button class="bg-black rounded-full justify-end mr-5"><p class="m-1">Press Me</p></button>
            </div>
          </div>
        </div>
    </main>
    <main class="flex md:justify-center">
        <div class="mt-10 py-7 md:w-2/4 w-full mx-2 bg-green-400 text-white "><span class="ml-10">Garment Production Lead </span><button class="rounded-full bg-black justify-end "><p class="m-1">Press Me</p></button><div class="ml-10">Location: IIT Roorkee</div></div>
    </main>
    <main class="flex md:justify-center">
        <div class="py-7 md:w-2/4 w-full mx-2 bg-emerald-400 text-white "><span class="w-1/2"><span class="ml-10">Garment Production Lead </span></span><button class="rounded-full bg-black flex-auto"><p class="m-1">Press Me</p></button><div class="ml-10">Location: IIT Roorkee</div></div>
    </main>
    <main class="flex md:justify-center">
        <div class="py-7 md:w-2/4 w-full mx-2 bg-pink-300 text-white "><span class="ml-10">Web Developer</span> <button class="rounded-full bg-black justify-end"><p class="m-1">Press Me</p></button><div class="ml-10">Location: IIT Roorkee</div></div>
    </main>
    <main class="flex md:justify-center">
        <div class="py-7 md:w-2/4 w-full mx-2 bg-rose-600 text-white "><span class="ml-10">Rapid Prototyping Engineer</span> <button class="rounded-full bg-black justify-end"><p class="m-1">Press Me</p></button><div class="ml-10">Location: IIT Roorkee</div></div>
    </main>
    <main class="flex md:justify-center">
        <div class="py-7 md:w-2/4 w-full mx-2 bg-orange-600 text-white "><span class="ml-10">Sales Operative</span><button class="rounded-full bg-black justify-end"><p class="m-1">Press Me</p></button><div class="ml-10">Location: IIT Roorkee</div></div>
    </main>

    <br/><br/><br/>

    <div class="bg=white text-center text-3xl">Why work at Ednam? <span class="text-orange-600 text-3xl">4 Reasons</span></div>
    <br/><br/>
    <div class="text-3xl mx-20">0. Don't Settle For Just Any Job!</div>
    <br/>
    <div class="text-lg mx-20">It is said that success will chase after those who chase after greatness.
        We invite you to join us on that pursuit – of doing something meaningful with our talents, of daring to dream big and betting on our hard work – while we can afford to</div>
    
    <br/><br/>
    <div class="text-3xl mx-20">1. We are doing interesting Work</div>
    <br/><br/>
    <div class="mx-20 text-center"><button class="rounded-full bg-black text-white text-lg "><p class="m-2">&nbsp;Home&nbsp;</p></button></div>
    <br/><br/><br/>
    <div class="text-3xl mx-20">2.  We believe Our Values make us valuable </div>
    <br/>
    <div><ul class="text-lg mx-20">
        <li> . Being Compassionate  Respectful to people</li>
        <li> . Being Sincere  Resolute in work</li>
        <li> . Having fun learning , and Learning to have fun</li>
    </ul></div>
    <br/><br/>
    <div class="text-3xl mx-20">3. We Compensate ourselves well </div>
    <br/><br/>
    <div class="text-2xl mx-20 text-orange-500 md:flex"><span class="mt-14 md:w-2/4">Employee Stock Ownership and Equity Vesting Plans</span><img src={first} class="mt-4 mx-auto md:ml-auto md:mr-11 " alt="benefits" /></div>
    <br/><br/>
    <div class="text-2xl mx-20  md:flex" ><span class="mt-28">Work in IIT Roorkee Campus - enjoy the laboratories , hangout places and other infrastructure of one of the best colleges in India.</span><img src={second} className="mx-auto mt-4 md:ml-20 md:mr-5 " alt="benefits" /></div>
    <br/><br/>
    <div class="text-2xl mx-20 text-orange-500 md:flex"><span class="mt-14">Don't worry about coming to a new city.
        ​Accommodation is arranged by Ednam. </span><img src={third} class="mx-auto mt-4 md:ml-auto md:mr-11" alt="benefits" /></div> 
    <br/><br/>
    <div class="text-2xl mx-20 md:flex"><span class="mt-28">Work in IIT Roorkee Campus - enjoy the laboratories , hangout places and other infrastructure of one of the best colleges in India.</span><img src={fourth} class=" mt-4 md:ml-20 md:mr-5 mx-auto" alt="benefits" /></div>
    <br/><br/><br/><br/>

    {/* <div className='md:flex mx-20'>
        <span className='text-2xl'>Hello world mkdfsfmkdm Work in IIT Roorkee Campus - enjoy the laboratorcvxccbnmies , hangout places and other</span>
        <StaticImage src='../images/fourth.png'  class='mt-4 md:ml-auto md:mr-5 mx-auto justify-center'/>
    </div> */}
    {/* <StaticImage src='../images/fourth.png' alt='df'></StaticImage> */}
    </>
  )
}
