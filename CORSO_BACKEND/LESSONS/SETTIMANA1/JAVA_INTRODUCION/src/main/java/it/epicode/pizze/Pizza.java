package it.epicode.pizze;

public class Pizza {
    // nome ingredienti calorie costo
    private String nome;
    private String ingredienti;
    private int calorie=0;
    private float costo;

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getIngredienti() {
        return ingredienti;
    }

    public void setIngredienti(String ingredienti) {
        this.ingredienti = ingredienti;
    }

    public int getCalorie() {
        return calorie;
    }

    public void setCalorie(int calorie) {
        if(calorie>1000) calorie=100;
        this.calorie = calorie;
    }

    public float getCosto() {
        return costo;
    }

    public void setCosto(float costo) {
        this.costo = costo;
    }

}
