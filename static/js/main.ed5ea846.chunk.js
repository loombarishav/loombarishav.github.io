(this.webpackJsonpsearch_v1=this.webpackJsonpsearch_v1||[]).push([[0],{109:function(a,e,t){},158:function(a,e,t){"use strict";t.r(e);var s=t(0),r=t.n(s),l=t(44),u=t.n(l),o=(t(109),t(87),t(18)),n=t(97),p=t(94),i=t.n(p),d=t(196),c=t(194),v=t(190),m=t(195),h=t(191),b=t(2);function g(a){var e=a.data;return Object(b.jsx)(c.a,{sx:{width:"100%",maxWidth:360,bgcolor:"background.paper"},children:e.map((function(a,e){var t=a.item;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(v.a,{alignItems:"flex-start",children:Object(b.jsx)(m.a,{primary:t.title,secondary:Object(b.jsxs)(s.Fragment,{children:[t.path&&Object(b.jsx)(h.a,{component:"p",variant:"body3",color:"text.secondary",children:t.path}),Object(b.jsx)(h.a,{component:"p",variant:"body2",color:"text.primary",children:t.url})]})})}),Object(b.jsx)(d.a,{component:"li"})]})}))})}var y=t(96),f=function(){var a=Object(s.useState)(""),e=Object(o.a)(a,2),t=e[0],r=e[1],l=Object(s.useState)([]),u=Object(o.a)(l,2),p=u[0],d=u[1],c=Object(s.useRef)(null),v=function(a){r(a)};return Object(s.useEffect)((function(){!function(){var a=y.filter((function(a){return a}));c.current=new n.a(a,{keys:[{name:"tags.value",weight:.4},{name:"title",weight:.6}],includeScore:!0,ignoreLocation:!1,threshold:.4,minMatchCharLength:5})}()}),[]),Object(s.useEffect)((function(){if(t.length>=3){var a=c.current.search(t,{limit:7});d(a)}}),[t]),Object(b.jsxs)("div",{className:"search-container",children:[Object(b.jsx)(i.a,{value:t,onChange:function(a){return v(a)},onCancelSearch:function(){return r(""),void v(t)}}),Object(b.jsxs)("div",{className:"result-container",children:[Object(b.jsx)("span",{className:"heading",children:"Searched Items"}),Object(b.jsx)("div",{className:"result-list",children:Object(b.jsx)(g,{data:p})})]})]})};var z=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{className:"app",children:Object(b.jsx)(f,{})})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(z,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(a){a.unregister()})).catch((function(a){console.error(a.message)}))},87:function(a,e,t){},96:function(a){a.exports=JSON.parse('[{"title":"Transactions","url":"https://dashboard.razorpay.com/app/payments","tags":[{"value":"Payments"},{"value":"Failed"},{"value":"Payment ID"},{"value":"Failure"},{"value":"rejected"},{"value":"payment status"},{"value":"Transactions"}]},{"title":"Refunds","url":"https://dashboard.razorpay.com/app/refunds","tags":[{"value":"Refund"},{"value":"Refund ID"},{"value":"Failed"},{"value":"Refund failure"},{"value":"refund status"}]},{"title":"Batch refunds","url":"https://dashboard.razorpay.com/app/refunds/batchuploads","tags":[{"value":"Refund"},{"value":"Refund ID"},{"value":"Failed"}]},{"title":"Orders","url":"https://dashboard.razorpay.com/app/orders","tags":[{"value":"Order"}]},{"title":"Disputes","url":"https://dashboard.razorpay.com/app/disputes","tags":[{"value":"Chargeback"}]},{"title":"Settlements","url":"https://dashboard.razorpay.com/app/settlements","tags":[{"value":"Payouts"},{"value":"Settlement cycle"},{"value":"Failed"},{"value":"Delayed"},{"value":"Skipped"},{"value":"Status"},{"value":"money settled; instant"},{"value":"settlement amount"},{"value":"settlement ID"}]},{"title":"Customers","url":"https://dashboard.razorpay.com/app/customers","tags":[{"value":"Customer"},{"value":"Add customer"}]},{"title":"Offers","url":"https://dashboard.razorpay.com/app/offers","tags":[{"value":"Promotions"},{"value":"Offer ID"}]},{"title":"Reports","url":"https://dashboard.razorpay.com/app/reports","tags":[{"value":"Download report"},{"value":"Settlements report"}]},{"title":"Account & Settings","url":"https://dashboard.razorpay.com/app/account-settings","tags":[{"value":"Settings"},{"value":"Account"},{"value":"Settings"},{"value":"Profile"},{"value":"Update profile"},{"value":"Change profile"},{"value":"email"},{"value":"login"},{"value":"update"},{"value":"2 step verification"},{"value":"2FA"},{"value":"factor"},{"value":"authentication"}]},{"title":"API logs","url":"https://dashboard.razorpay.com/app/developers/apis","tags":[{"value":"API requests"},{"value":"API failure"}]},{"title":"Developer","url":"https://dashboard.razorpay.com/app/developers/apis","tags":[{"value":"Developer settings"},{"value":"API failure"}]},{"title":"App store","url":"https://dashboard.razorpay.com/app/app-store","tags":[{"value":"Apps"},{"value":"Download apps"}]},{"title":"Add payment methods","url":"https://dashboard.razorpay.com/app/payment-methods/cards","tags":[{"value":"Request terminal"}]},{"title":"Cards","url":"https://dashboard.razorpay.com/app/payment-methods/cards","tags":[{"value":"Credit Card"},{"value":"Visa"},{"value":"Master Card"},{"value":"Rupay"},{"value":"Maestro"},{"value":"Amex"},{"value":"Diners Club"},{"value":"Card"}]},{"title":"UPI","url":"https://dashboard.razorpay.com/app/payment-methods/upi-qr","tags":[{"value":"UPI App"},{"value":"Google Pay"},{"value":"Phone Pe"},{"value":"BHIM"}]},{"title":"Netbanking","url":"https://dashboard.razorpay.com/app/payment-methods/netbanking","tags":[{"value":"HDFC"},{"value":"AXIS"},{"value":"ICICI"},{"value":"SBI"},{"value":"State Bank"},{"value":"Union Bank"}]},{"title":"EMI","url":"https://dashboard.razorpay.com/app/payment-methods/emi","tags":[{"value":"Credit Card EMI"},{"value":"Debit Card EMI"},{"value":"Zest money"},{"value":"Early salary"},{"value":"Axio"}]},{"title":"Wallet","url":"https://dashboard.razorpay.com/app/payment-methods/wallet","tags":[{"value":"Freecharge"},{"value":"Paytm"},{"value":"Phonepe"}]},{"title":"Pay Later","url":"https://dashboard.razorpay.com/app/payment-methods/pay-later","tags":[{"value":"BNPL"},{"value":"Flexipay"},{"value":"Simpl"},{"value":"Lazypay"}]},{"title":"International Payments","url":"https://dashboard.razorpay.com/app/payment-methods/international-payments","path":["in: Account & Settings"],"tags":[{"value":"International activation"},{"value":"Abroad"},{"value":"PayPal"},{"value":"Foreign"}]},{"title":"Website/app details","url":"https://dashboard.razorpay.com/app/website-app-settings/business-website-details","tags":[{"value":"Update website"},{"value":"Update website"},{"value":"Add website"},{"value":"Change website"}]},{"title":"API Keys","url":"https://dashboard.razorpay.com/app/website-app-settings/api-keys","tags":[{"value":"Generate API Keys"},{"value":"Create API Key"},{"value":"Live Key"}]},{"title":"Webhooks","url":"https://dashboard.razorpay.com/app/website-app-settings/webhooks","tags":[{"value":"Add webhook"},{"value":"Push API"},{"value":"Webcallback"},{"value":"alert"}]},{"title":"Contact details","url":"https://dashboard.razorpay.com/app/business-settings/contact","tags":[{"value":"Contact name"},{"value":"email"},{"value":"display name"},{"value":"number"}]},{"title":"Account details","url":"https://dashboard.razorpay.com/app/business-settings/business","tags":[{"value":"Account Status"},{"value":"KYC form"},{"value":"Activation status"},{"value":"Onboarding form"}]},{"title":"Business details","url":"https://dashboard.razorpay.com/app/app/business-settings/gst","tags":[{"value":"Business name"},{"value":"Business type"},{"value":"Registration date"}]},{"title":"GST details","url":"https://dashboard.razorpay.com/app/business-settings/customer-support","tags":[{"value":"GST"},{"value":"Change GST"},{"value":"edit GST"},{"value":"tax"}]},{"title":"Customer support details","url":"https://dashboard.razorpay.com/app/business-settings/account-activation-details","tags":[{"value":"Support details"},{"value":"Email"},{"value":"Contact help"},{"value":"Query"},{"value":"Ticket"}]},{"title":"Manage team","url":"https://dashboard.razorpay.com/app/business-settings/team","tags":[{"value":"Add team member"},{"value":"Add role"},{"value":"Add users"}]},{"title":"Balances","url":"https://dashboard.razorpay.com/app/payments-and-refunds-settings/balances","tags":[{"value":"Add fund"},{"value":"Reserve balance"},{"value":"Current balance"},{"value":"add money"}]},{"title":"Credits","url":"https://dashboard.razorpay.com/app/payments-and-refunds-settings/credits","tags":[{"value":"Add credit"},{"value":"Fee credit"},{"value":"Refund credit"},{"value":"Amount credit"},{"value":"add refund money"}]},{"title":"Reminders","url":"https://dashboard.razorpay.com/app/payments-and-refunds-settings/reminders","tags":[{"value":"Payment link reminders"},{"value":"Payment link"}]},{"title":"Transaction limits","url":"https://dashboard.razorpay.com/app/payments-and-refunds-settings/transaction-limits","tags":[{"value":"Increase transaction limit"},{"value":"payment limit"}]},{"title":"Fee bearer","url":"https://dashboard.razorpay.com/app/payments-and-refunds-settings/fee-bearer","tags":[{"value":"Razorpay fee"},{"value":"Transaction fee"},{"value":"Fee details"},{"value":"Transaction charges"},{"value":"payment fee"}]},{"title":"Capture and refund settings","url":"https://dashboard.razorpay.com/app/payments-and-refunds-settings/capture-refund-settings","tags":[{"value":"Capture payment"},{"value":"Automatic capture"},{"value":"refund"}]},{"title":"Failed payments recovery","url":"https://dashboard.razorpay.com/app/payments-and-refunds-settings/failed-payments-recovery","tags":[{"value":"failed payment recovery setting"},{"value":"failed transaction recovery"}]},{"title":"Bank account details","url":"https://dashboard.razorpay.com/app/bank-accounts-settlements/bank-account-details","path":["in: Account & Settings"],"keys":["update bank account","change bank account","Add bank account"],"tags":[{"value":"update bank account"},{"value":"change bank account"},{"value":"Add bank account"}]},{"title":"settlement details","url":"https://dashboard.razorpay.com/app/bank-accounts-settlements/settlement-details","tags":[{"value":"settlement details"}]},{"title":"Forward inward remmitance statement","url":"https://dashboard.razorpay.com/app/bank-accounts-settlements/firs","tags":[{"value":"FIRS certificate"},{"value":"Proof of foreign transfers"}]},{"title":"Email notification","url":"https://dashboard.razorpay.com/app/notification-settings/email","path":["in: Account & Settings"],"tags":[{"value":"Email notification"},{"value":"Email settings"}]},{"title":"SMS notification","url":"https://dashboard.razorpay.com/app/notification-settings/sms","tags":[{"value":"Message"},{"value":"SMS notification"},{"value":"SMS settings"},{"value":"SMS number"}]},{"title":"WhatsApp notification","url":"https://dashboard.razorpay.com/app/notification-settings/whatsapp","tags":[{"value":"Whatsapp notification"},{"value":"Whatsapp settings"},{"value":"Whatsapp number"}]},{"title":"Branding","url":"https://dashboard.razorpay.com/app/checkout-settings/branding","tags":[{"value":"Theme"},{"value":"Color"},{"value":"Logo"},{"value":"brand name"}]},{"title":"Flash checkout","url":"https://dashboard.razorpay.com/app/checkout-settings/flash-checkout","tags":[{"value":"Enable flash checkout"},{"value":"Flash checkout"}]},{"title":"Skip mandate summary page","url":"https://dashboard.razorpay.com/app/checkout-settings/skip-mandatory-summary-page","tags":[{"value":"Mandate summary page"}]},{"title":"Trusted badge","url":"https://dashboard.razorpay.com/app/checkout-settings/trustedbadge","tags":[{"value":"Add trusted badge"},{"value":"Razorpay trusted badge"}]},{"title":"Invoices","url":"https://dashboard.razorpay.com/app/invoices","tags":[{"value":"Invoice ID"},{"value":"Create invoice"},{"value":"Manage invoices"}]},{"title":"Items","url":"https://dashboard.razorpay.com/app/items","tags":[{"value":"Item"},{"value":"product"}]},{"title":"Payment links","url":"https://dashboard.razorpay.com/app/paymentlinks","tags":[{"value":"Link"},{"value":"Create payment link"},{"value":"Payment link ID"},{"value":"product"}]},{"title":"Payment pages","url":"https://dashboard.razorpay.com/app/paymentpages","tags":[{"value":"Page"},{"value":"Create payment page"},{"value":"Create custom page"}]},{"title":"Payment button","url":"https://dashboard.razorpay.com/app/paymentbuttons","tags":[{"value":"Button"},{"value":"Create payment button"}]},{"title":"Route","url":"https://dashboard.razorpay.com/app/route/payments","tags":[{"value":"Transfer payment"},{"value":"Transfers"},{"value":"Reversals"},{"value":"Create transfer"},{"value":"money transfer"}]},{"title":"Subscriptions","url":"https://dashboard.razorpay.com/app/subscriptions","tags":[{"value":"Subscription plan"},{"value":"Recurring payment"},{"value":"Subscription link"},{"value":"Subscription ID"}]},{"title":"Plans","url":"https://dashboard.razorpay.com/app/plans","tags":[{"value":"plan id"},{"value":"plan name"},{"value":"billing"}]},{"title":"QR Code","url":"https://dashboard.razorpay.com/app/qr_codes","tags":[{"value":"UPI QR code"},{"value":"Create QR codes"},{"value":"QR Code ID"},{"value":"UPI QR product"}]},{"title":"Smart Collect","url":"https://dashboard.razorpay.com/app/smartcollect/virtualaccounts","tags":[{"value":"Virtual account"},{"value":"Create customer identifier"},{"value":" Customer identifier ID"}]},{"title":"Checkout rewards","url":"https://dashboard.razorpay.com/app/checkout-rewards","tags":[{"value":"Rewards"},{"value":"Offers; product"}]},{"title":"Razorpay.me Link","url":"https://dashboard.razorpay.com/app/payment-handle","tags":[{"value":"link"},{"value":"@"},{"value":"create"}]},{"title":"X Banking","url":"https://dashboard.razorpay.com/app/razorpayx","tags":[{"value":"Business"},{"value":"Banking"},{"value":"Bank"},{"value":"X"}]},{"title":"X Corporate Cards","url":"https://dashboard.razorpay.com/app/capital/corporate-cards/","tags":[{"value":"Bsuiness Card"},{"value":"Get Card"}]},{"title":"Line of credit","url":"https://dashboard.razorpay.com/app/capital/line-of-credit/apply","tags":[{"value":"Business"},{"value":"Loan"},{"value":"Credit"}]}]')}},[[158,1,2]]]);
//# sourceMappingURL=main.ed5ea846.chunk.js.map