describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await browser.url(`https://the-internet.herokuapp.com/login`);})

      it("enter data " ,async()=>{ 
         await $('#username').setValue('tomsmith');
        await $('#password').setValue('SuperSecretPassword!');
        await $('button[type="submit"]').click();});

        it("get information" ,async()=>{
            await expect($('#flash')).toBeExisting();
            await expect($('#flash')).toHaveTextContaining(
            'You logged into a secure area!');
        }

        )
        });
    

