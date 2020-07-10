fetch('../components/footer.html')
.then(r => {return r.text()})
.then((data)=>{
    document.querySelector('footer').innerHTML = data;
})