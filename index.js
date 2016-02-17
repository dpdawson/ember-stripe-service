/* jshint node: true */
'use strict';

module.exports = {
  name: 'stripe-service',
  contentFor: function(type, config) {
    // we use body since Stripe must be available before
    if (type === 'body' && config.environment !== 'test') {
      return '<script type="text/javascript" src="https://js.stripe.com/v2/"></script>';
    }
  }
};
