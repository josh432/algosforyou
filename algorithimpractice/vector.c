

-- 
                                      #ifndef VECTOR
#define VECTOR
template <typename Type>
class Vector {

private:
	Single_list <Type> list;
	const int VECTOR_CAPACITY = 10;
	int myVector_size;
	int array_capacity;
	Type *array;
	int ifront;
	int iback;

public:
	template<typename Type>
	Vector<Type>::Vector(int n=VECTOR_CAPACITY, int v=0) :
		myVector_size(0),
		iback(-1),
		ifront(0),
		array_capacity(std::max(1, default_capacity)),
		array(new Type[array_capacity]) {
		Type Vector <Type>::push_back(v);
	}

		bool empty() const;
	Type front() const;
	Type *array;

	template<typename Type>
	Vector<Type>::~Vector() {
		delete[] array;
	}


	template <typename Type>
	bool Vector<Type>::empty() const {
		//return list.empty();
		return (myVector_size == 0)
	}

	template <typename Type>
	Type Vector <Type>::clear() const {
		delete[] array;
    Vector();
	}

	template <typename Type>
	Type Vector<Type>::front() const {
		return array[ifront];
	}

	template <typename Type>
	Type Vector<Type>::back() const {
		return array[iback];
	}



	template <typename Type>
	Type top() const {
		if (empty()) {
			throw underflow();
		}
		//return list.front();
		return array[myVector_size - 1];
	}

	template <typename Type>
	void Vector<Type>::push_back(type const &obj) {
		//list.push_front(obj);
		if (myVector_size == array_capacity) {
			throw overflow();
		}
		iback = ++iback % capacity();
		array[iback] = obj;
		++myVector_size;
	}


	template <typename Type>
	Type pop_back() {
		//return list.pop_front();
		if (empty()) {
			throw underflow();
		}
		--myVector_size;
		++ifront;
		return array[ifront - 1];
	}

	void double_capacity() {
		Type *tmp_array = new Type[2 * array_capacity];

		for (int i = 0; i < array_capacity; ++1) {
			tmp_array[i] = array[i];
		}

		delete[array];
		array = tmp_array;
		array_capacity *= 2;
	}
};
#endif
