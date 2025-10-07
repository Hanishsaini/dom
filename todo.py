#load existin item 
#1. create a new item
#2. list item 
#3. mark item as complete
#4. save item 

def load_task():
    pass

def save_task():
    pass

def veiw_task():
    pass

def create_task():
    pass

def mark_task_complete():
    pass

def main():
    task = load_task()

    while True:
        print("\nTO DO LIST MANAGER")
        print("1. view task")
        print("2. add task")
        print("3. complete task")
        print("4. exit")

        choice =input("enter your choice: ").strip()
       
        if choice == "1":
              veiw_task()
        elif choice == "2":
            create_task()
        elif choice == "3":
            mark_task_complete()
        elif choice == "4":
            print("goodbye!")
            break
        else:
            print("invalid choice. please try again.")

            
