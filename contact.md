 <section id="contact-us-section">
        <h1>Contact Us</h1>
        <form id="contact-form">
            <h2>How can we help you?</h2>
            <section class="user-input-section">
                <label for="username">Your Name</label>
                <input type="text" name="user-name" id="username">
                <label for="useremail">Your E-Mail Address</label>
                <input type="text" name="user-email" id="useremail">
                <label for="usernumber">Your Phone Number</label>
                <input type="text" name="user-number" id="usernumber">
            </section>
            <section class="user-message-section">
                <label for="usermessage">Your Message</label>
                <textarea id="usermessage" rows="5" maxlength="400" ></textarea>
            </section>
            <section class="how-section">
                <label>How did you find us?</label>
                <select>
                    <option>Web Search</option>
                    <option>Social Media</option>
                    <option>Word of mouth</option>
                    <option>Radio</option>
                    <option>Newspaper</option>
                    <option>Other</option>
                </select>
            </section>
           
                <h2>How should we reply?</h2>
                <div class="form-control-inline">
                    <input type="radio" name="verify" id="text-message" value="text">
                    <label for="text-message">Text-message</label>
                    
                </div>
                <div class="form-control-inline">
                    <input type="radio" name="verify"  id="phone" value="phone">
                    <label for="phone">Phone</label>
        
                </div>
                <div class="form-control-inline">
                    <input type="radio" name="verify"  id="email" value="email">
                    <label for="email">Email</label>
        
                </div>
                <div class="form-control-inline">
                    <input type="checkbox" id="agree-terms" name="terms">
                    <label for="agree-terms">Agree to terms?</label>
                   </div>

                   <div class="button-container">
                    <button type="reset">Clear</button>
                    <button type="submit">Submit</button>
                   </div>
          
        </form>
    </section>