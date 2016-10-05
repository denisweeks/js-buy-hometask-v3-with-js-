$(function () {
    var row_template = $(".box").html();

    function add_row(name) {
        console.log(name + " added");
        var $node = $(row_template);
        var quantity = 1;
        var $plus = $node.find(".buttonAdd");
        var $label = $node.find(".numberItem");
        $plus.click(function () {
            quantity++;
            $label.text(quantity);
            console.log("+");
        });
    }
    add_row("Томати")
    add_row("Огірки")
    add_row("Банани")
});