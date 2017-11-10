window.onload = function () {
    new Vue({
        el: '#testApp',
        data: {
            members: [{
                name: "Peter",
                title: "director",
                avatar: 'https://image.flaticon.com/icons/svg/145/145867.svg'
            }, {
                name: "Masha",
                title: "developer",
            },]
        }
    })
}