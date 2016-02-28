var app = angular.module("launchApp",["firebase","ngRoute"]);

var text = {
  login : "登陆",
  signup : "注册",
  clubname : "名字",
  description : "描述",
  email : "邮箱",
  makeyourclub :"创建您的社团",
  yourdomain : "你的个性域名看起来将会是这样：",
  submakeyourclub : "互通的校园社区， 全新的交流体验",
  create : "创建",
  easycom : "简单方便的交流和管理",
  weprovide : "我们提供一个让师生与社团更简洁、更有效率的沟通与管理平台。 让学校与社团能够更好地协作，从而增进学校与社团之间的管理与交流。",
  discover : "发现生活，发现兴趣",
  themost : "人生最重要的事情莫过于做自己最喜欢做的事了。 我们提供一个让您发现生活与兴趣爱好的平台，寻找与您有共同兴趣爱好的小伙伴们吧。",
  createwebsite : "创建你的社团",
  withthecool : "不用代码， 不需要太多时间，用最酷的域名， 做最酷的事情。创建一个专属您自己的网站吧。让更多的小伙伴们加入你们， 这个最酷最值得留念的青春属于你。让青春之火燃烧吧。",
  teaminfo : "Linra团队",
  teamdescr: "致力于简化您生活的烦恼与忙碌，Linra，创造一个没有苦恼的世界。",
  dashboard: "仪表板",
  community:"社区",
  help:"帮助",
  contact:"联系"
}

app.controller('formCtrl',["$scope","$firebaseArray",
  function($scope,$firebaseArray){
    $scope.cntext = null;
    $scope.english = true;

    var ref = new Firebase("https://torrid-fire-1367.firebaseio.com/club");
    $scope.clubProfile = $firebaseArray(ref);
    $scope.club = {};

    $scope.registerR = function(){
      Materialize.toast('Successful!!!', 2000,'',function(){
        window.location.href = "/club_page.html";
      });

    };

    $scope.submitClub = function(){
      $scope.clubProfile.$add($scope.club);
      $scope.club = {};
      console.log("submited!");
      $('#modal1').closeModal();
      $scope.registerR();
    }
    $scope.translate = function(){
      if($scope.english){
        $scope.cntext = text;
        $scope.english = false;
      }else{
        $scope.cntext = null;
        $scope.english = true;
      }

    };
}]);
