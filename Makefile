SRC=jquery.class.js
CMP=jquery.class.min.js

all : $(CMP)

$(CMP) : $(SRC)
	yuic $< > $@

clean :
	rm -f $(CMP)