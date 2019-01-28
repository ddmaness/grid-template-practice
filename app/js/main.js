Vue.component('nav-bar', {
    template: `
    <nav class="nav-top card">
        <div class="nav-top-left">
            <ul>
                <li>Home</li>
                <li>Store</li>
                <li>Blog</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
        <div class="nav-top-right">
            <input type="text">
            <div class="nav-top-social">
                <ul>
                    <li>Fa</li>
                    <li>Tw</li>
                    <li>G+</li>
                </ul>
            </div>
            <span class="nav-top-account">acnt</span>
        </div>
    </nav>
    `
});

Vue.component('side-nav-bar', {
    template: `
    <nav class="nav-side card">
        <div class="nav-side-links">
            <ul>
                <li>Home</li>
                <li>Store</li>
                <li>Blog</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
        <div class="nav-side-contact">
            <ul>
                <li>
                    <img>
                    <div>(555)555-5555<br>(555)555-5555</div>
                </li>
                <li>
                    <img>
                    <div>1600 Pennsylvania Ave.<br>Washington,DC<br>20600 USA</div>
                </li>
                <li>
                    <img>
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
            console.log(this.items);
        }
    },
    template: `
    <div>
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
    <div>
        <div>{{ item.name }} <button v-on:click="$emit('makeActive', item.id)"></button></div>
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