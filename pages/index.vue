<template>
  <div>
    <section class="uk-section uk-section-small padding-normalize compact-h-sm">
      <div class="uk-container uk-container-large">


        <div class="uk-flex uk-flex-wrap">
          <div class="uk-width-expand">
            <div class="uk-margin-small-bottom">
              <colo-stats></colo-stats>
            </div>

            <div class="uk-width-expand@m">
              <div class="tiny-padding">
                <div class="tiny-padding bordered uk-border-rounded background">
                  <h6 class="uk-margin-remove">
                   Active Colo Requests
                 </h6>
               </div>
             </div>
             <home-requests></home-requests>
           </div>
         </div>
         <div class="uk-width-large@s tiny-padding">
           <div class="background uk-border-rounded bordered">
            <div class="tiny-padding border-bottom">
              <h6 class="uk-margin-remove">
               Recent Invoices
             </h6>
           </div>
           <div>

            <div class="uk-flex uk-flex-middle uk-flex-row-reverse tiny-padding border-bottom">
              <div class="uk-width-expand uk-flex uk-flex-right">
                <div class="status pending">
                  <small>Active</small>
                </div>
              </div>
              <div class="uk-width-2-3 uk-flex">
                <div class="uk-width-2-3">
                  <small>1 Jan - 31 Jan, 2023</small>
                </div>
                <div class="uk-width-1-2 uk-flex uk-flex-right">
                 <span class="uk-text-bold">
                  $700.00
                </span>
              </div>
            </div>
          </div>



          <div class="uk-flex uk-flex-middle uk-flex-row-reverse tiny-padding border-bottom">
            <div class="uk-width-expand uk-flex uk-flex-right">
              <div class="status declined">
                <small>Past Due</small>
              </div>
            </div>
            <div class="uk-width-2-3 uk-flex">
              <div class="uk-width-2-3">
                <small>1 Jan - 31 Jan, 2023</small>
              </div>
              <div class="uk-width-1-2 uk-flex uk-flex-right">
               <span class="uk-text-bold">
                $700.00
              </span>
            </div>
          </div>
        </div>

        <div class="uk-flex uk-flex-middle uk-flex-row-reverse tiny-padding border-bottom">
          <div class="uk-width-expand uk-flex uk-flex-right">
            <div class="status declined">
              <small>Past Due</small>
            </div>
          </div>
          <div class="uk-width-2-3 uk-flex">
            <div class="uk-width-2-3">
              <small>1 Jan - 31 Jan, 2023</small>
            </div>
            <div class="uk-width-1-2 uk-flex uk-flex-right">
             <span class="uk-text-bold">
              $700.00
            </span>
          </div>
        </div>
      </div>

      <div class="uk-flex uk-flex-middle uk-flex-row-reverse tiny-padding border-bottom">
        <div class="uk-width-expand uk-flex uk-flex-right">
          <div class="status declined">
            <small>Past Due</small>
          </div>
        </div>
        <div class="uk-width-2-3 uk-flex">
          <div class="uk-width-2-3">
            <small>1 Jan - 31 Jan, 2023</small>
          </div>
          <div class="uk-width-1-2 uk-flex uk-flex-right">
           <span class="uk-text-bold">
            $700.00
          </span>
        </div>
      </div>
    </div>


    <div class="uk-flex uk-flex-middle uk-flex-row-reverse tiny-padding">
      <div class="uk-width-expand uk-flex uk-flex-right">
        <div class="status approved">
          <small>Paid</small>
        </div>
      </div>
      <div class="uk-width-2-3 uk-flex">
        <div class="uk-width-2-3">
          <small>1 Jan - 31 Jan, 2023</small>
        </div>
        <div class="uk-width-1-2 uk-flex uk-flex-right">
         <span class="uk-text-bold">
          $700.00
        </span>
      </div>
    </div>


  </div>





</div>
</div>
<div class="uk-flex uk-flex-center tiny-padding">
  <button class="uk-button uk-button-primary">
    Go to billing
  </button>
</div>
</div>
</div>







</div>
</section>
</div>
</template>
<script>
export default {

}
</script>
