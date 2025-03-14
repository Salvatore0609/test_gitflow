package it.epicode.correzioni.esercizio1;

public class FunzioniIfElseIf {
    public static boolean stringaPariDispari(String input){
        if(input.length()%2==0){
            return true;
        }else{
            return false;
        }

    }

    public static boolean annoBisestile(int anno){
        if(anno%4==0){
            if(anno%100==0){
                if(anno%400==0){
                    return true;
                }else{
                    return false;
                }
            }else{
                return true;
            }
        }else{
            return false;
        }
    }

}


