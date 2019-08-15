import Component from '@ember/component';

export default Component.extend({

  // It's important to have response undefined instead of boolean
  response : undefined,
  show     : false,

  actions: {
    promiseClicked() {
      new Promise( respond => {
        this.set( 'show', true );

        this.addObserver( 'response', function observer() {
          this.removeObserver( 'response', observer );
          respond( this.get( 'response' ) )
        });

      }).then( proceed => {
        if ( proceed ) {
          console.log( proceed );
        } else {
          console.log( proceed );
        }
        this.setProperties({ 'show': false, 'response': undefined });
      });
    },

    response( bool ) {
      this.set( 'response', bool );
    }
  },
});
