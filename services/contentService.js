var app=angular.module("myApp");
app.service("contentService",function($http,$q,$stateParams){
  console.log('inside service');
  var pcid=$stateParams.pid;
   var cid=$stateParams.cid;
  // return{
  //   getImage : function(p_id,c_id){
      var deffered=$q.defer();
      //  $q.list=$stateParams.pid;
      // console.log($q.list);
      var url1 = 'http://beta.appystore.in/appy_app/appyApi_handler.php?method=getContentList&content_type=videos&limit=45&offset=0&catid=';
      var url2 = '&pcatid=';
      var url3 = '&age=1.5&incl_age=5';
      var url = url1+c_id+url2+p_id+url3;
      $http.get(url,{headers:{'X_APPY_USERID':'290903782','X_APPY_IMEI': '353368070301951','X_APPY_PCP_ID':'999','X_APPY_CAMPAIGN_ID': '8700441600','X_APPY_APP_TYPE': 'lite','X_APPY_TTR': '10800000' ,'X_APPY_UTYPE': 'O','X_APPY_MSISDN': '0','X_APPY_IS_NEW_USER': 'N','X_APPY_API_KEY':'gh610rt23eqwpll','X_APPY_UserAgent':'Mozilla/5.0 (Linux; Android 5.0.2; Panasonic ELUGA Switch Build/LRX22G; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/51.0.2704.81 Mobile Safari/537.36'}})
      .then(function(data){
        deffered.resolve(data);
      console.log(data);
        return deffered.promise;
      });
//     }
// }

});
