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