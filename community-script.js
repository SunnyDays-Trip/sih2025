// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const addQuestionBtn = document.getElementById('add-question-btn');
    const questionModal = document.getElementById('question-modal');
    const closeBtn = document.querySelector('.close-btn');
    const cancelBtn = document.getElementById('cancel-btn');
    const questionForm = document.getElementById('question-form');
    const postsContainer = document.getElementById('posts-container');

    // Sample data for initial display (will be replaced by Firebase data)
    const samplePosts = [
        {
            id: '1',
            userName: 'Rajesh Singh',
            userRole: 'Wheat farmer from Punjab',
            question: 'Has anyone tried the new organic fertilizer for wheat? Results seem promising!',
            timestamp: new Date(),
            initials: 'RS'
        },
        {
            id: '2',
            userName: 'Priya Kaur',
            userRole: 'Rice farmer from Haryana',
            question: 'Dealing with brown plant hopper in my rice field. Any effective organic solutions?',
            timestamp: new Date(),
            initials: 'PK'
        }
    ];

    // Initialize the app
    init();

    function init() {
        // Load initial posts
        loadPosts();
        
        // Set up event listeners
        setupEventListeners();
        
        // Set up real-time listener for new posts
        setupRealtimeListener();
    }

    function setupEventListeners() {
        // Add question button
        addQuestionBtn.addEventListener('click', openModal);
        
        // Close modal buttons
        closeBtn.addEventListener('click', closeModal);
        cancelBtn.addEventListener('click', closeModal);
        
        // Close modal when clicking outside
        questionModal.addEventListener('click', function(e) {
            if (e.target === questionModal) {
                closeModal();
            }
        });
        
        // Form submission
        questionForm.addEventListener('submit', handleFormSubmit);
    }

    function openModal() {
        questionModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        questionModal.style.display = 'none';
        document.body.style.overflow = 'auto';
        questionForm.reset();
    }

    function handleFormSubmit(e) {
        e.preventDefault();
        
        const userName = document.getElementById('user-name').value.trim();
        const userRole = document.getElementById('user-role').value.trim();
        const questionText = document.getElementById('question-text').value.trim();
        
        if (!userName || !userRole || !questionText) {
            alert('Please fill in all fields');
            return;
        }
        
        // Generate initials from name
        const initials = generateInitials(userName);
        
        // Create new post object
        const newPost = {
            userName: userName,
            userRole: userRole,
            question: questionText,
            timestamp: new Date(),
            initials: initials
        };
        
        // Add to Firebase (if configured) or local storage
        addPostToDatabase(newPost);
        
        // Close modal and reset form
        closeModal();
    }

    function generateInitials(name) {
        return name.split(' ')
            .map(word => word.charAt(0).toUpperCase())
            .join('')
            .substring(0, 2);
    }

    function addPostToDatabase(post) {
        // Check if Firebase is properly configured
        if (window.db && firebaseConfig.apiKey !== "AIzaSyDDziuGu7e0hLhQIbiXzOO2Pc--8YdGKBU") {
            // Add to Firebase Firestore
            db.collection('posts').add({
                userName: post.userName,
                userRole: post.userRole,
                question: post.question,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                initials: post.initials
            }).then(() => {
                console.log('Post added to Firebase');
            }).catch((error) => {
                console.error('Error adding post to Firebase:', error);
                // Fallback to local storage
                addPostToLocalStorage(post);
            });
        } else {
            // Fallback to local storage if Firebase is not configured
            addPostToLocalStorage(post);
        }
    }

    function addPostToLocalStorage(post) {
        let posts = JSON.parse(localStorage.getItem('forumPosts') || '[]');
        post.id = Date.now().toString();
        posts.unshift(post);
        localStorage.setItem('forumPosts', JSON.stringify(posts));
        loadPosts();
    }

    function loadPosts() {
        // Check if Firebase is properly configured
        if (window.db && firebaseConfig.apiKey !== "AIzaSyDDziuGu7e0hLhQIbiXzOO2Pc--8YdGKBU") {
            // Load from Firebase
            db.collection('posts')
                .orderBy('timestamp', 'desc')
                .get()
                .then((querySnapshot) => {
                    const posts = [];
                    querySnapshot.forEach((doc) => {
                        const data = doc.data();
                        posts.push({
                            id: doc.id,
                            ...data,
                            timestamp: data.timestamp ? data.timestamp.toDate() : new Date()
                        });
                    });
                    renderPosts(posts);
                })
                .catch((error) => {
                    console.error('Error loading posts from Firebase:', error);
                    // Fallback to local storage
                    loadPostsFromLocalStorage();
                });
        } else {
            // Load from local storage or show sample data
            loadPostsFromLocalStorage();
        }
    }

    function loadPostsFromLocalStorage() {
        const storedPosts = JSON.parse(localStorage.getItem('forumPosts') || '[]');
        if (storedPosts.length > 0) {
            renderPosts(storedPosts);
        } else {
            // Show sample data if no posts exist
            renderPosts(samplePosts);
        }
    }

    function setupRealtimeListener() {
        // Only set up real-time listener if Firebase is properly configured
        if (window.db && firebaseConfig.apiKey !== "AIzaSyDDziuGu7e0hLhQIbiXzOO2Pc--8YdGKBU") {
            db.collection('posts')
                .orderBy('timestamp', 'desc')
                .onSnapshot((querySnapshot) => {
                    const posts = [];
                    querySnapshot.forEach((doc) => {
                        const data = doc.data();
                        posts.push({
                            id: doc.id,
                            ...data,
                            timestamp: data.timestamp ? data.timestamp.toDate() : new Date()
                        });
                    });
                    renderPosts(posts);
                }, (error) => {
                    console.error('Error setting up real-time listener:', error);
                });
        }
    }

    function renderPosts(posts) {
        if (posts.length === 0) {
            postsContainer.innerHTML = `
                <div class="empty-state">
                    <h3>No questions yet</h3>
                    <p>Be the first to ask a question in the community forum!</p>
                </div>
            `;
            return;
        }

        postsContainer.innerHTML = posts.map(post => `
            <div class="post-card">
                <div class="user-avatar">${post.initials}</div>
                <div class="post-content">
                    <div class="user-info">
                        <div class="user-name">${escapeHtml(post.userName)}</div>
                        <div class="user-role">${escapeHtml(post.userRole)}</div>
                    </div>
                    <div class="question-text">${escapeHtml(post.question)}</div>
                </div>
            </div>
        `).join('');
    }

    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    // Add some sample posts to local storage on first visit
    if (!localStorage.getItem('forumPosts')) {
        localStorage.setItem('forumPosts', JSON.stringify(samplePosts));
    }
});

// Utility function to format timestamps
function formatTimestamp(timestamp) {
    const now = new Date();
    const postTime = new Date(timestamp);
    const diffInMinutes = Math.floor((now - postTime) / (1000 * 60));
    
    if (diffInMinutes < 1) return 'Just now';
    if (diffInMinutes < 60) return `${diffInMinutes} minutes ago`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)} hours ago`;
    return `${Math.floor(diffInMinutes / 1440)} days ago`;
}
