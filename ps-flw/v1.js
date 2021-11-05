var paymentForm = document.getElementById(&#39;paymentForm&#39;);
paymentForm.addEventListener(&#39;submit&#39;, payWithPaystack, false);
function payWithPaystack() {
  var handler = PaystackPop.setup({
    key: document.getElementById(&#39;ppk&#39;).innerText,
    metadata:{
  custom_fields:[
    {
      display_name: &quot;First Name&quot;,
      variable_name: &quot;first_name&quot;,
      value: document.getElementById(&#39;first-name&#39;).value,
    },
    {
      display_name: &quot;Last Name&quot;,
      variable_name: &quot;last_name&quot;,
      value: document.getElementById(&#39;last-name&#39;).value,
    },
    {
      display_name: &quot;Cart Items&quot;,
      variable_name: &quot;cart_items&quot;,
      value: document.getElementById(&#39;item_list&#39;).innerText,
    },
    {
      display_name: &quot;Customer Address&quot;,
      variable_name: &quot;customer_address&quot;,
      value: document.getElementById(&#39;ivaddress&#39;).value,
    },
    {
      display_name: &quot;Customer City&quot;,
      variable_name: &quot;customer_city&quot;,
      value: document.getElementById(&#39;ivcity&#39;).value,
    },
    {
      display_name: &quot;Customer Country&quot;,
      variable_name: &quot;customer_country&quot;,
      value: document.getElementById(&#39;ivcountry&#39;).value,
    },
    {
      display_name: &quot;Customer Phone&quot;,
      variable_name: &quot;customer_phone&quot;,
      value: document.getElementById(&#39;ivphone&#39;).value,
    },
    {
      display_name: &quot;Customer Gender&quot;,
      variable_name: &quot;customer_gender&quot;,
      value: document.getElementById(&#39;ivgender&#39;).value,
    },
    {
      display_name: &quot;Birth Day&quot;,
      variable_name: &quot;birth_day&quot;,
      value: document.getElementById(&#39;ivbirth&#39;).value,
    },
    {
      display_name: &quot;Residence State&quot;,
      variable_name: &quot;residence_state&quot;,
      value: document.getElementById(&#39;ivstate&#39;).value,
    },
    {
      display_name: &quot;Facebook Profile&quot;,
      variable_name: &quot;facebook_profile&quot;,
      value: document.getElementById(&#39;ivfacebook&#39;).value,
    },
    {
      display_name: &quot;Instagram Profile&quot;,
      variable_name: &quot;instagram_profile&quot;,
      value: document.getElementById(&#39;ivinstagram&#39;).value,
    },
  ]
},
    email: document.getElementById(&#39;email-address&#39;).value,
    amount: document.getElementById(&#39;item_price&#39;).value * 100,
    currency: &#39;NGN&#39;,
    callback: function(response) {
  window.location = &#39;https://www.aremuolami.com/p/thank-you.html&#39;
},
    onClose: function() {
      alert(&#39;Transaction was not completed. Are you sure you want to cancel this payment?&#39;);
    },
  });
  handler.openIframe();
}

  function makePayment() {
    FlutterwaveCheckout({
      public_key: document.getElementById(&quot;fpk&quot;).innerText,
      tx_ref: document.getElementById(&quot;treft&quot;).innerText,
      amount: document.getElementById(&quot;item_price&quot;).value,
      currency: &quot;NGN&quot;,
      payment_options: &quot;card&quot;,
      redirect_url: // specified redirect URL
        &quot;https://www.aremuolami.com/p/thank-you.html&quot;,
      meta: {
	CartItems: document.getElementById(&quot;item_list&quot;).innerText,
	LastName: document.getElementById(&quot;last-name&quot;).value,
	CustomerAddress: document.getElementById(&quot;ivaddress&quot;).value,
	CustomerCity: document.getElementById(&quot;ivcity&quot;).value,
	ResidenceState: document.getElementById(&quot;ivstate&quot;).value,
	CustomerGender: document.getElementById(&quot;ivgender&quot;).value,
	BirthDay: document.getElementById(&quot;ivbirth&quot;).value,
	CustomerCountry: document.getElementById(&quot;ivcountry&quot;).value,
	CustomerPhone: document.getElementById(&quot;ivphone&quot;).value,
	FacebookProfile: document.getElementById(&quot;ivfacebook&quot;).value,
	InstagramProfile: document.getElementById(&quot;ivinstagram&quot;).value,
      },
      customer: {
        email: document.getElementById(&quot;email-address&quot;).value,
        name: document.getElementById(&quot;first-name&quot;).value,
	  },
      callback: function (data) {
        console.log(data);
      },
      onclose: function() {
        // close modal
      },
      customizations: {
        title: &quot;Aremite Academy&quot;,
        description: &quot;Creative inmates...&quot;,
        logo: &quot;https://1.bp.blogspot.com/-uYZFnu2h9HI/YSnVtfe0BwI/AAAAAAAAAcA/UyW7zqPW2WMd3PoAwl1eb1KfyRtDcITyQCLcBGAsYHQ/s0/Aremu-head-lg.png&quot;,
      },
    });
  }
