$(document).ready(function(){
    // Opens Memo Input Window 
    $("#new-memo-btn, #add-memo-mobile").on('click', function(){
        $("#new-memo-window").fadeIn({
            duration: 900,
            start: function(){
                $("#new-memo-window").addClass("animated zoomIn");
            },
            complete: function(){
                $("#new-memo-window").removeClass("animated zoomIn");

            }
        }); 
        $("#add-memo-mobile").addClass('add-memo--inactive');
    });

    // Adds Memo to dashboard by calling the addMemo Function
    $("#add-memo").on('click', function(){
        addMemo();
        $("#add-memo-mobile").removeClass('add-memo--inactive');
    });

    // Closes the Memo Input Window
    $("#cancel-memo").on('click', function(){
        closeNewMemoWindow();
        $("#add-memo-mobile").removeClass('add-memo--inactive');
    });

    // Function that Creates the Memo component and adds it to the memos dashboard
    function addMemo(){
        var newMemoContent;
        newMemoContent = $("#new-memo-content").val();
        var memoExpand = '<span class="pe-7s-exapnd2 memo__content__option memo__content__option--expand"></span>';
        var memoDelete = '<span class="pe-7s-trash memo__content__option memo__content__option--delete"></span>';
        var memoContentOptions = '<div class="memo__content__options">'+ memoExpand + memoDelete +'</div>';
        $(".memos").prepend(' <div class="memo"><div class="memo__content"><p>'+ newMemoContent +'</p></div><div class="memo__content--fade">'+ memoContentOptions +'</div></div> ');
        
        // Attaches each event listener for each option to the newly created memo
        expandMemo();
        deleteMemo();
        closeMemoView()
        closeNewMemoWindow();
    }

    // View the entire memo
    function expandMemo(){
        $(".memo__content__option--expand").unbind('click').on('click', function(){
            $(this).offsetParent().parent().toggleClass("memo-expanded");
            $(".memo-expanded").fadeToggle({
                progress: function(){
                    $(this).css({"display":"flex"})
                }
            });
        })
    }

    // Close Expanded Memo View
    function closeMemoView(){
        $(".memo-view__buttons--exit").on('click', function(){
            $(".memo-view__content").children().first().text('');
            $(".memo-view").removeClass('memo-view--active');
        });
    }

    //  Function to delete the memo
    function deleteMemo(){
        $(".memo__content__option--delete").on('click', function(){
            // $(this).offsetParent().parent().remove();
            $(this).offsetParent().parent().fadeOut({
                complete: function(){
                    $(this).remove();
                }
            })
        })
    }

    // Function to close the new Memo Input Window
    function closeNewMemoWindow(){
        $("#new-memo-content").val('');
        // $("#new-memo-window").removeClass('memo-input--active');
        $("#new-memo-window").fadeOut({
            start: function(){
                $("#new-memo-window").addClass("animated zoomOut");
            },
            complete: function(){
                $("#new-memo-window").removeClass("animated zoomOut");
            }
        });
        
    }
})