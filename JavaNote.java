// PriorityQueue

PriorityQueue<Cell> minHeap = new PriorityQueue<Cell>(k, new Comparator<Cell>(){
    @Override
    public int compare(Cell c1, Cell c2){
      if(c1.value == c2.value){
        return 0;
      }
      return c1.value < c2.value ? -1 : 1;
    }
  });

StringBuilder:      char[]          List<String>    PriorityQueue     HashSet     HashMap         
  append                            .add             .offer(e)         .add        .put
  .length()          .length        .size()         .size()
                                    .remove          .poll()
                                                    .getValue()                   .get
                                                                      .contains   .containsKey
                                                                                                  
String
.length()
.isEmpty()
.charAt()
List<String> myList = new ArrayList<String>(Arrays.asList(s.split(",")));//String to ArrayList

ArrayList
.add()
//Converting array of characters to arraylist of characters
List<Character> cList = new ArrayList<Character>();
for(char c : cArray) {
    cList.add(c);
}

static class Element {
  int value;
  List<Integer> compredValues;

  Element(int value){
    this.value = value;
    this.compredValues = new ArrayList<>();
  }
}