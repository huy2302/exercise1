<?
class Student {
    private $name;
    private $age;
    private $grade;

    // Constructor để khởi tạo giá trị ban đầu
    public function __construct($name, $age, $grade) {
        $this->name = $name;
        $this->age = $age;
        $this->grade = $grade;
    }
    
}