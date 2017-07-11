var postionSpaceR;
var postionSpaceC;
var bord;
var finalstate;
$(document).ready(function(){
    $("#startGame").click(function(){
        postionSpaceC=3;
        postionSpaceR=3;
              $(".final").fadeOut("slow");
              $("img").fadeOut("fast");
              $(".Game").fadeIn("fast");
              $("button").removeClass("space");
               bord= makearrayofuniquenumbers() ;
               finalstate= makefinalstate();
                    z=0;
                for(x=0;x<4;x++){
                     for(y=0;y<4;y++){
                          pa="#"+x+"-"+y;
                           n=bord[z];
                           $(pa).text(n);
                           z++;
            }
           
        }
        $("#3-3").addClass("space");
        console.log(bord);
        
      });
    $(".forplay").click(function(){
        value=$(this).text();
        v=-1;
        if(value!='-1'){
            
                id=$(this).attr('id');
                  R=id.charAt(0),C=id.charAt(2);
                 st=checkstap(R,C);
                 B=parseInt(value);
            console.log(id+"   - "+st+"-"+B);
                 if(st==1){
                     po1=bord.lastIndexOf(B);
                     po2=bord.lastIndexOf(-1);
                     bord[po1]=-1;
                     bord[po2]=B;
                     $(this).text(v);
                     $(this).addClass("space");
                     posspace="#"+postionSpaceR+"-"+postionSpaceC;
                     $(posspace).text(value);
                     $(posspace).removeClass("space");
                     postionSpaceC=parseInt(C);
                     postionSpaceR=parseInt(R); 
                     console.log(bord);
                     
                 }
            FS=CheckFinalState(bord,finalstate);
            if(FS==1){
                $(".final").fadeIn("slow");
               $(".Game").fadeOut("fast");
                $("img").fadeIn("fast");
            
            }
        }

    });
    $(".close").click(function(){
        $(".final").fadeOut("slow");
    });
});
function makearrayofuniquenumbers(){
  var numbers = [15];
   for(var j=0; j < 15; j++){
        n =Math.floor(Math.random() * 15) + 1 ;
        if($.inArray(n, numbers) === -1){
            numbers[j]=n;
        }else{
            numbers[j]=0;
        } 
    }
     for(var j=1; j <=15; j++){
           found=numbers.lastIndexOf(j);
           if(found==-1){
               f=numbers.lastIndexOf(0);
               numbers[f]=j;
           }    
    }
    numbers[15]=-1;
   
   return numbers;
}
function makefinalstate(){
    var Fstate = [15];
    for(i=0;i<15;i++){
        Fstate[i]=i+1;
    }
    Fstate[15]=-1;
    return Fstate;
}
function CheckFinalState(arr1,arr2){
    for(i=0;i<arr1.length;i++){
        if(arr1[i]!=arr2[i]){
            return 0;
        }
    }
    return 1;
    
}
function checkstap( R1, C2){
    R=parseInt(R1);
    C=parseInt(C2);
    var newRp=parseInt(R1)+1;
    var newR=parseInt(R1)-1;
    var newCp=parseInt(C2)+1;
    var newC=parseInt(C2)-1;
    console.log(postionSpaceC+"-"+postionSpaceR);
    if(R==postionSpaceR && newC==postionSpaceC){
        return 1;
    }else if(C==postionSpaceC && postionSpaceR==newR){
        return 1;
    }else if(C==postionSpaceC && postionSpaceR==newRp){
        return 1;
    }else if(R==postionSpaceR && newCp==postionSpaceC){
        return 1;
    }else{
        return 0;
    }
    
    
}