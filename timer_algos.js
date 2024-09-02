// Bubble Sort Timing Function
function bubbleSort_t(arr) {
    for (let i = 0; i < arr.length; i++) {
        let swapped = false;
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (compare(arr, j, j + 1)) {
                swap(arr, j, j + 1);
                swapped = true;
            }
        }
        if (!swapped) break;
    }
}

// Selection Sort Timing Function
function selectionSort_t(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIdx = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (compare(arr, minIdx, j)) {
                minIdx = j;
            }
        }
        swap(arr, i, minIdx);
    }
}

// Quick Sort (Lomuto) Timing Function
function quickSortLomuto_t(arr) {
    _quickSortLomuto_t(arr, 0, arr.length - 1);
}

function _quickSortLomuto_t(arr, left, right) {
    if (left < right) {
        let pivotIdx = _partitionLomuto_t(arr, left, right);
        _quickSortLomuto_t(arr, left, pivotIdx - 1);
        _quickSortLomuto_t(arr, pivotIdx + 1, right);
    }
}

function _partitionLomuto_t(arr, left, right) {
    let pivot = arr[right].val;
    let i = left - 1;
    for (let j = left; j < right; j++) {
        if (arr[j].val < pivot) {
            compare(arr, j, right);
            swap(arr, ++i, j);
        }
    }
    swap(arr, i + 1, right);
    return i + 1;
}

// Merge Sort Timing Function
function mergeSort_t(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
    return merge_t(mergeSort_t(left), mergeSort_t(right));
}

function merge_t(left, right) {
    let resultArray = [];
    let leftIndex = 0, rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex].val < right[rightIndex].val) {
            resultArray.push(left[leftIndex]);
            leftIndex++;
        } else {
            resultArray.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // Concatenating the rest of the elements from left or right
    resultArray = resultArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));

    // Copying the sorted result back to the original array
    for (let i = 0; i < resultArray.length; i++) {
        arr[i] = resultArray[i];
    }
    return arr;
}

// Heap Sort Timing Function
function heapSort_t(arr) {
    let n = arr.length;

    // Build max heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify_t(arr, n, i);
    }

    // One by one extract elements
    for (let i = n - 1; i > 0; i--) {
        swap(arr, 0, i);
        heapify_t(arr, i, 0);
    }
}

function heapify_t(arr, n, i) {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (left < n && compare(arr, largest, left)) {
        largest = left;
    }

    if (right < n && compare(arr, largest, right)) {
        largest = right;
    }

    if (largest != i) {
        swap(arr, i, largest);
        heapify_t(arr, n, largest);
    }
}

// Helper Functions
function compare(arr, i, j) {
    // Set compare flag
    arr[i].compare = true;
    arr[j].compare = true;
    return arr[i].val > arr[j].val;
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;

    // Set swap flag
    arr[i].swap = true;
    arr[j].swap = true;
}
