"use strict";

var users = { users: [

    {
        "customer": {
            "id": "14510288",
            "name": "Arne Morar",
            "phone": "(062) 536-7265",
            "address": {
                "street": "449 Judge Spur",
                "city": "Port Johnny",
                "state": "New York"
            },
            "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/marshallchen_/128.jpg"
        }
    },

    {
        "customer": {
            "id": "13838595",
            "name": "Jovan Aufderhar",
            "phone": "(476) 888-7320",
            "address": {
                "street": "71930 Kuvalis Fort",
                "city": "West Marion",
                "state": "South Dakota"
            },
            "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/zauerkraut/128.jpg"
        }
    },

    {
        "customer": {
            "id": "02412474",
            "name": "Gonzalo Satterfield IV",
            "phone": "(417) 827-3966",
            "address": {
                "street": "5925 Rosendo Park",
                "city": "Elsamouth",
                "state": "North Carolina"
            },
            "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/fjaguero/128.jpg"
        }
    },

    {
        "customer": {
            "id": "22243214",
            "name": "Timmy Stoltenberg",
            "phone": "(955) 558-1069",
            "address": {
                "street": "37241 Marcos Canyon",
                "city": "Rolfsonton",
                "state": "Kentucky"
            },
            "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/BenouarradeM/128.jpg"
        }
    }
]};

var UserTableComponent = {
    props: ['users'],
    template:
    `
    <table class="table">
    <thead>
    <tr>
        <th scope='col'>#</th>
        <th scope="col">User name</th>
        <th scope="col">Phone</th>
        <th scope="col">Address</th>
        <th scope="col" data-formatter="imageFormatter">Avatar</th>
        <th>Edit</th>
    </tr>
    </thead>
    <tr v-for='(user, index) in users'>
        <td> {{index+1}} </td>
        <td> {{user.customer.name}}</td>
        <td> {{user.customer.phone}}</td>
        <td> {{fullAddress(user)}}</td>
        <td> <img :src="user.customer.avatar" width="50px" height="50px"></td>
        <td> <button>Modify</button></td>
    </tr>
    </table>
    `
    ,
    methods: {
        fullAddress: function(user) {
            return user.customer.address.street + ", " + user.customer.address.city + ", " + user.customer.address.state;
        }
    }

}

window.onload = function () {
    new Vue({
        el: '#testApp2',
        data: function () {
            return users;
        },
        components: {
            'user-table-component' : UserTableComponent,
        }
    });
}