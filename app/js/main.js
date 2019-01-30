Vue.component('nav-bar', {
    template: `
    <nav class="top-nav card">
        <div class="top-nav-left">
            <ul>
                <li>Home</li>
                <li>Store</li>
                <li>Blog</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
        <div class="top-nav-right">
            <input type="text">
            <div class="top-nav-social">
                <ul>
                    <li>Fa</li>
                    <li>Tw</li>
                    <li>G+</li>
                </ul>
            </div>
            <span class="top-nav-account">acnt</span>
        </div>
    </nav>
    `
});

Vue.component('side-nav-bar', {
    template: `
    <nav class="side-nav card">
        <div class="side-nav-links">
            <ul class="site-links">
                
                <li><a href="#"><div><?xml version="1.0" encoding="iso-8859-1"?>
                <!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
                <?xml-stylesheet type="text/css" href="../styles/styles.scss.css" ?>
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 59.365 59.365" style="enable-background:new 0 0 59.365 59.365;" xml:space="preserve" width="512px" height="512px">
                <path d="M58.363,26.632l-9.681-8.989V6.365h-8v3.849L29.682,0L1.002,26.632c-0.404,0.376-0.428,1.009-0.052,1.414  c0.375,0.404,1.008,0.427,1.414,0.052l4.319-4.011v3.278v32h16V35.302c0-1.07,0.867-1.937,1.937-1.937h10.126  c1.07,0,1.937,0.867,1.937,1.937v24.063h16v-32v-3.278l4.319,4.011c0.192,0.179,0.437,0.267,0.681,0.267  c0.269,0,0.536-0.107,0.732-0.319C58.791,27.641,58.767,27.008,58.363,26.632z" fill="#cccccc"/>
                </svg>Home</div></a></li>
                
                <li><a href="#"><div><?xml version="1.0" encoding="iso-8859-1"?>
                <?xml-stylesheet type="text/css" href="../styles/styles.scss.css" ?>
                <!-- Generator: Adobe Illustrator 16.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
                <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 510 510" style="enable-background:new 0 0 510 510;" xml:space="preserve">
                <g>
                    <g id="shopping-cart">
                        <path d="M153,408c-28.05,0-51,22.95-51,51s22.95,51,51,51s51-22.95,51-51S181.05,408,153,408z M0,0v51h51l91.8,193.8L107.1,306    c-2.55,7.65-5.1,17.85-5.1,25.5c0,28.05,22.95,51,51,51h306v-51H163.2c-2.55,0-5.1-2.55-5.1-5.1v-2.551l22.95-43.35h188.7    c20.4,0,35.7-10.2,43.35-25.5L504.9,89.25c5.1-5.1,5.1-7.65,5.1-12.75c0-15.3-10.2-25.5-25.5-25.5H107.1L84.15,0H0z M408,408    c-28.05,0-51,22.95-51,51s22.95,51,51,51s51-22.95,51-51S436.05,408,408,408z" fill="#cccccc"/>
                    </g>
                </g>
                </svg>
                Store</div></a></li>
                
                <li><a href="#"><div><?xml version="1.0" encoding="iso-8859-1"?>
                <?xml-stylesheet type="text/css" href="../styles/styles.scss.css" ?>
                <!-- Generator: Adobe Illustrator 16.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
                <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 30.928 30.928" style="enable-background:new 0 0 30.928 30.928;" xml:space="preserve">
                <g>
                    <path d="M24.791,4.451c0.02-0.948-0.016-1.547-0.016-1.547l-9.264-0.007l0,0h-0.047h-0.047l0,0L6.152,2.904   c0,0-0.035,0.599-0.015,1.547H0v1.012c0,0.231,0.039,5.68,3.402,8.665C4.805,15.373,6.555,15.999,8.618,16   c0.312,0,0.633-0.021,0.958-0.049c1.172,1.605,2.526,2.729,4.049,3.289v4.445H9.154v2.784H7.677v1.561h7.74h0.094h7.74V26.47   h-1.478v-2.784h-4.471v-4.445c1.522-0.56,2.877-1.684,4.049-3.289C21.678,15.98,21.999,16,22.311,16   c2.062-0.002,3.812-0.627,5.215-1.873c3.363-2.985,3.402-8.434,3.402-8.665V4.451H24.791z M4.752,12.619   c-1.921-1.7-2.489-4.61-2.657-6.144h4.158c0.176,1.911,0.59,4.292,1.545,6.385c0.175,0.384,0.359,0.748,0.547,1.104   C6.912,13.909,5.706,13.462,4.752,12.619z M26.176,12.619c-0.953,0.844-2.16,1.29-3.592,1.345c0.188-0.355,0.372-0.72,0.547-1.104   c0.955-2.093,1.369-4.474,1.544-6.385h4.158C28.665,8.008,28.098,10.918,26.176,12.619z" fill="#cccccc"/>
                </g>
                </svg>Contests</div></a></li>
                
                <li><a href="#"><div><?xml version="1.0" encoding="iso-8859-1"?>
                <?xml-stylesheet type="text/css" href="../styles/styles.scss.css" ?>
                <!-- Generator: Adobe Illustrator 18.1.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 23.625 23.625" style="enable-background:new 0 0 23.625 23.625;" xml:space="preserve" width="512px" height="512px">
                <g>
                    <path d="M11.812,0C5.289,0,0,5.289,0,11.812s5.289,11.813,11.812,11.813s11.813-5.29,11.813-11.813   S18.335,0,11.812,0z M14.271,18.307c-0.608,0.24-1.092,0.422-1.455,0.548c-0.362,0.126-0.783,0.189-1.262,0.189   c-0.736,0-1.309-0.18-1.717-0.539s-0.611-0.814-0.611-1.367c0-0.215,0.015-0.435,0.045-0.659c0.031-0.224,0.08-0.476,0.147-0.759   l0.761-2.688c0.067-0.258,0.125-0.503,0.171-0.731c0.046-0.23,0.068-0.441,0.068-0.633c0-0.342-0.071-0.582-0.212-0.717   c-0.143-0.135-0.412-0.201-0.813-0.201c-0.196,0-0.398,0.029-0.605,0.09c-0.205,0.063-0.383,0.12-0.529,0.176l0.201-0.828   c0.498-0.203,0.975-0.377,1.43-0.521c0.455-0.146,0.885-0.218,1.29-0.218c0.731,0,1.295,0.178,1.692,0.53   c0.395,0.353,0.594,0.812,0.594,1.376c0,0.117-0.014,0.323-0.041,0.617c-0.027,0.295-0.078,0.564-0.152,0.811l-0.757,2.68   c-0.062,0.215-0.117,0.461-0.167,0.736c-0.049,0.275-0.073,0.485-0.073,0.626c0,0.356,0.079,0.599,0.239,0.728   c0.158,0.129,0.435,0.194,0.827,0.194c0.185,0,0.392-0.033,0.626-0.097c0.232-0.064,0.4-0.121,0.506-0.17L14.271,18.307z    M14.137,7.429c-0.353,0.328-0.778,0.492-1.275,0.492c-0.496,0-0.924-0.164-1.28-0.492c-0.354-0.328-0.533-0.727-0.533-1.193   c0-0.465,0.18-0.865,0.533-1.196c0.356-0.332,0.784-0.497,1.28-0.497c0.497,0,0.923,0.165,1.275,0.497   c0.353,0.331,0.53,0.731,0.53,1.196C14.667,6.703,14.49,7.101,14.137,7.429z" fill="#cccccc"/>
                </g>
                </svg>About</div></a></li>
                
                <li><a href="#"><div><?xml version="1.0" encoding="iso-8859-1"?>
                <?xml-stylesheet type="text/css" href="../styles/styles.scss.css" ?>
                <!-- Generator: Adobe Illustrator 18.1.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 14 14" style="enable-background:new 0 0 14 14;" xml:space="preserve" width="512px" height="512px">
                <g>
                    <g>
                        <path d="M7,9L5.268,7.484l-4.952,4.245C0.496,11.896,0.739,12,1.007,12h11.986    c0.267,0,0.509-0.104,0.688-0.271L8.732,7.484L7,9z" fill="#cccccc"/>
                        <path d="M13.684,2.271C13.504,2.103,13.262,2,12.993,2H1.007C0.74,2,0.498,2.104,0.318,2.273L7,8    L13.684,2.271z" fill="#cccccc"/>
                        <polygon points="0,2.878 0,11.186 4.833,7.079   " fill="#cccccc"/>
                        <polygon points="9.167,7.079 14,11.186 14,2.875   " fill="#cccccc"/>
                    </g>
                </g>
                </svg>Contact</div></a></li>
            </ul>
            <ul class="contact-links">
                <li>
                    <img src="../images/phone.svg">
                    <div>(555)555-5555<br>(555)555-5555</div>
                </li>
                <li>
                    <img src="../images/marker.svg">
                    <div>1600 Pennsylvania Ave.<br>Washington,DC<br>20600 USA</div>
                </li>
                <li>
                    <img src="../images/mail.svg">
                    <div>name@email.com<br>office@email.com</div>
                </li>
            </ul>
        </div>
        <accordian-menu></accordian-menu>
    </nav>
    `
});

Vue.component('accordian-menu', {
    data: function() {
        return {
            items: [
                {id: 0, isActive:true, name:'Labo Liqua', list:['Laborum', 'Culpa', 'Magna', 'Exercitation']},
                {id: 1, isActive:false, name:'Velit', list:['Enim', 'Do Ipsom', 'Dolor Culpa', 'Magna Enim']},
                {id: 2, isActive:false, name:'Occaecat', list:['Ipsom', 'Lorem', 'Velit Occaecat', 'Amet Ad']},
                {id: 3, isActive:false, name:'Magna Ipsom', list:['Aliqua Amet', 'Ipsom Lorem', 'Do Magna Culpa', 'Id']},
            ]
        };
    },
    methods: {
        makeActive: function(id) {
            this.items.forEach(function(elem) {
                if (elem.id == id) {
                    elem.isActive = true;
                }
                else {
                    elem.isActive = false;
                }
            });
        }
    },
    template: `
    <div class= 'side-nav-accordian'>
        <accordian-item
            v-for='item in items'
            v-bind:item='item'
            v-bind:key='item.id'
            v-on:makeActive='makeActive'
        ></accordian-item>
    </div>
    `
});

Vue.component('accordian-item', {
    props: ['item'],
    template: `
    <div class='accordian-item' v-bind:class='{active: item.isActive}'>
        <div class='accordian-item-header'>
            <a href='#' v-on:click="$emit('makeActive', item.id)"><h3>{{ item.name }}</h3></a>
            <button v-on:click="$emit('makeActive', item.id)"><img src="../images/arrow.png"></img></button>
        </div>
        <ul>
            <li v-for="item in item.list">
                {{ item }}
            </li>
        </ul>
    </div> 
    `
})

const app = new Vue({
    el:'#app',
    data: {
        message: 'Hello World!'
    }
});