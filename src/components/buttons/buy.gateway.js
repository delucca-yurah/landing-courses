const gateway = (handlers, course) => {
  /* global PagarMeCheckout */
  const checkout = new PagarMeCheckout.Checkout({
    encryption_key: process.env.GATSBY_PAGARME_ENCRYPTION_KEY,
    success: handlers.success,
    error: handlers.error,
  });

  const centify = price => parseFloat(price.replace(',',''))
  const price = centify(course.price.promotional || course.price.original)

  // Obs.: é necessário passar os valores boolean como string
  checkout.open({
    amount: price,
    buttonText: 'Pagar',
    buttonClass: 'botao-pagamento',
    customerData: 'true',
    createToken: 'true',
    paymentMethods: 'credit_card',
    postbackUrl: process.env.GATSBY_PAGARME_POSTBACK_URL,
    uiColor: 'rgb(94, 42, 134)',
    items: [
      {
        id: course.courseId,
        title: course.title,
        unit_price: price,
        quantity: 1,
        tangible: false
      }
    ]
  })
}

export default gateway
