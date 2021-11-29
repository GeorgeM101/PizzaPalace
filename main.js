
$('#AddToCart').on('click', function (event) {
    event.preventDefault();
    var amount = +$('#pizzaSize').val() + +$('#pizzaCrust').val() + +$('#pizzaTopping').val()
    var finalAmount = amount * +$('#pizzaQuantity').val()
    $('#subTotal').html(finalAmount)
    $('#cardCart').fadeIn(100)
})
$('#flexSwitchCheckChecked').on('change', function () {
    if($('#flexSwitchCheckChecked').is(':checked')){
        $('#deliveryDetails').fadeIn(100)
    }else{
        $('#deliveryDetails').fadeOut(100)
    }
})
$('#checkOut').on('click', function (event) {
    event.preventDefault();
    $('#checkoutBox').fadeIn(1000)
    $('#orderSize').html($('#pizzaSize').find('option:selected').text())
    var amount = +$('#pizzaSize').val() + +$('#pizzaCrust').val() + +$('#pizzaTopping').val()
    var finalAmount = amount * +$('#pizzaQuantity').val()
    var orderAmount = finalAmount
    if($('#flexSwitchCheckChecked').is(':checked')){
        orderAmount = finalAmount + 150
    }
    $('#orderTotal').html(orderAmount)
})
$('#checkOut').on('click',function(){
    $('#checkoutBox').fadeIn(1000)
    $('#orderCrust').html($('#pizzaCrust').find('option:selected').text())
    var amount = +$('#pizzaSize').val() + +$('#pizzaCrust').val() + +$('#pizzaTopping').val()
    var finalAmount = amount * +$('#pizzaQuantity').val()
    var orderAmount = finalAmount
    if($('#flexSwitchCheckChecked').is(':checked')){
        orderAmount = finalAmount + 150
    }
    $('#orderTotal').html(orderAmount)
})
$('#checkOut').on('click',function(){
    $('#checkoutBox').fadeIn(1000)
    $('#orderTopping').html($('#pizzaTopping').find('option:selected').text())
    var amount = +$('#pizzaSize').val() + +$('#pizzaCrust').val() + +$('#pizzaTopping').val()
    var finalAmount = amount * +$('#pizzaQuantity').val()
    var orderAmount = finalAmount
    if($('#flexSwitchCheckChecked').is(':checked')){
        orderAmount = finalAmount + 150
    }
    $('#orderTotal').html(orderAmount)
})
$('#checkOut').on('click',function(){
    $('##checkoutBox').fadeIn(1000)
    $('#orderNumber').html($('#pizzaQuantity').find('option:selected').text())
    var amount = +$('#pizzaSize').val() + +$('#pizzaCrust').val() + +$('#pizzaTopping').val()
    var finalAmount = amount * +$('#pizzaQuantity').val()
    var orderAmount = finalAmount
    if($('#flexSwitchCheckChecked').is(':checked')){
        orderAmount = finalAmount + 1000
    }
    $('#orderTotal').html(orderAmount)
});