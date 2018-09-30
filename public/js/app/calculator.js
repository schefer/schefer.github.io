// Cloth class
function Cloth(name) {
    this.name = name;
    this.total = 0;
    this.prop = {
        price: 0,
        heating: 0,
        waterproof: 0,
        reflector: 0,
        size: 0,
        type: 0,
        color: 0,
        time: 0
    };
}

Cloth.prototype = {
    constructor: Cloth,
    getProp: function(propName) {
        var prop = document.getElementById( this.name + '_' + propName );
        if (prop)
            if (prop.tagName == 'SELECT')
                return parseFloat( prop.options[prop.selectedIndex].value );
            else if (prop.tagName == 'INPUT' && prop.checked)
                return parseFloat(prop.value);
        return 0;
    },
    refresh: function() {
        var check = document.getElementById( this.name + '_price' );
        this.total = 0;
        if (check && check.checked)
            for ( var key in this.prop )
            {
                this.prop[key] = this.getProp(key);
                if (key == 'time' && this.prop[key] != 0)
                    this.total = parseFloat(this.total) * this.prop[key];
                else
                    this.total = parseFloat(this.total) + this.prop[key];
            }

        var result = document.getElementById( this.name + '_total');
        if (result)
            result.innerHTML = this.total;
    },
};

// -------- //

function Calculator(name) {
    this.name = name;
    this.total = 0;
    this.items = {
        jacket: new Cloth('jacket'),
        pants: new Cloth('pants'),
        sweater: new Cloth('sweater'),
        underpants: new Cloth('underpants'),
        //socks: new Cloth('socks'),
    };
    this.container = document.getElementById( this.name );

    //for ( var key in this.items )
    //this.items[key] = new Cloth(key);
    //this.refresh();
}

Calculator.prototype = {
    constructor: Calculator,
    refresh: function() {
        this.total = 0;
        for ( var key in this.items )
        {
            this.items[key].refresh();
            this.total = this.total + this.items[key].total;
        }

        var result = document.getElementById( this.name + '_total');
        if (result)
            result.innerHTML = this.total;
    },
    listen: function() {
        var inputs = this.container.querySelectorAll('.calculator input, .calculator select');
        for (var i = 0; i < inputs.length; i++)
            inputs[i].addEventListener('change', this.refresh.bind(this), false);
        //inputs[i].addEventListener('change', function(){ context.refresh.call(context); }, false);
    },
};

var calc_elem = document.getElementById('calculator');
if (calc_elem) {
    var calc = new Calculator('calculator');
    calc.refresh();
    calc.listen();
}