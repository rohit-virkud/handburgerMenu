/**/
selector(".menu").addEventListener('click',function()
{
   this.classList.toggle('open');
   selector('.navbarscene').classList.toggle('open');
});


function selector(s)
{
  return document.querySelector(s);
}
/**/