let quote = document.getElementById('quote')

quote.innerHTML = '<em>"Failure will never overtake me if my determination to succeed is strong enough."<em> <b>- A P J <b>'



let infoBox = document.querySelectorAll('.info-box')

infoBox.forEach(e => e.style.backgroundColor = '#9ACD32')



let list = document.getElementsByTagName('li')

list[2].innerHTML = '<i> Completed task <i>'



let footerMsg = document.querySelector('footer span')

footerMsg.append(' Have a great day')

