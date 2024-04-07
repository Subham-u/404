import "./contactus.css";

function Contactus(){

    const scriptURL = 'https://script.google.com/macros/s/AKfycbzZ03SXRKxb84rHjAcRxx5ZkmGxTj4ZDFvYOVJUTDXXqt6AoLFb5pKfqwWPsoJuGKKM/exec'
    const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById("msg")  
  
    function submit(e) {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
                          msg.innerHTML = "Messages sent successfully"
                          setTimeout(function(){
                              msg.innerHTML = ""
                          },5000)
                          form.reset()
          })
        .catch(error => console.error('Error!', error.message))
    }
    return(
        <>
            <div>
            <h1 className="sub-title">Feedback Form</h1>
                <div className="contact-right">
                    <form name="submit-to-google-sheet">
                    <input type="text" name="Name" placeholder="Your Name" required />
                    <input type="email" name="Email" placeholder="Your Email" required />
                    <textarea name="Message" rows={6} placeholder="Your Message" defaultValue={""} />
                    <button type="submit" className="btn" onClick={submit}>SUBMIT</button>
                    </form>
                    <span id="msg" />
                </div>
        </div>

    </>
    )
}

export default Contactus;