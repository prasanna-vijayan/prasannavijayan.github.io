---
title: Promise for bootstrap Modal
image: /images/advanced.jpg
featured: true
author:
  - pvy
date: Tue Aug 15 2018 GMT+0530 (IST)
tags:
  - ember
status: published
---

There are lot of things you can do with Promise. Today, I will share my experience on using promise for modal which I recently learned.

If you don't know much about EmberJs or Promise. Please visit <a href="http://emberjs.com" target="_blank">EmberJS</a> and 
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank">Promise</a>) for get your basics up

## Why Promise?

Promise introduced because of callbacks. Callbacks becomes very difficult to read if it is nested one or more callbacks.

#### Prerequisites

```sh
ember install ember-bootstrap
ember generate ember-bootstrap --preprocessor=sass
```

If you want to use less instead of sass use `--preprocesor=less`. For other config, please check <a href="https://www.ember-bootstrap.com/#/getting-started/setup" target="_blank">here</a>


#### Steps

1. Create your component using 
```sh
ember generate component promise
```
<br/>
2. promise.js
```js
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
```
Make sure variable response is set to undefined after removing observer.

<br/>
3. promise.hbs
```js
<BsButton @onClick={{action 'promiseClicked'}}> Promise </BsButton>

<BsModal
  @open={{show}}
  @onSubmit={{action "response" true}}
  @onHidden={{action "response" false}} as |modal|>
  <modal.header>
    <h4 class="modal-title">
      Custom Dialog
      <div class="badge">2</div>
    </h4>
  </modal.header>
  <modal.body>
    Promise Example?
    Check console when you click "Cancel or Save".
  </modal.body>
  <modal.footer>
    <BsButton @onClick={{action "response" false}}>Cancel</BsButton>
    <BsButton @type="success" @onClick={{action "response" true}}>Save</BsButton>
  </modal.footer>
</BsModal>
```
Checkout the example <a href="http://localhost:4200/examples?component=promise" target="_blank">here</a>

That's it.
