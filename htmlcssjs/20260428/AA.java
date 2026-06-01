interface InnerAA {
    void doA();
}
public class AA {
    public static void main(String[] args) {
        InnerAA aa = new InnerAA(){
            public void doA(){
                System.out.println("테스트");
            }
        };
        aa.doA();
        InnerAA bb = ()->{
            System.out.println("테스트");
        };
        bb.doA();
    }
}